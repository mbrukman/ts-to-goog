(ns generator.core
  (:require [jx.java.shell :refer [timeout-sh]]
            [clojure.data.json :as json]
            [clojure.tools.cli :as cli]
            [clojure.java.io :as io]
            [cats.core :as cats]
            [cats.monad.either :as either]
            [cats.match]
            [clojure.core.match :as m])
  (:gen-class))

(defn sh
  [& args]
  (try
    (apply timeout-sh (* 5 60 1000) args)
    (catch Exception e {:error (.getMessage e)})))

(def not-nil? (complement nil?))

(def cli-options
  [["-d" "--working-dir WORKING DIR"
    :default "."]])

(defn parse-cli
  [args]
  (let [{:keys [options arguments errors]} (cli/parse-opts args cli-options)]
    (if errors
      (either/left errors)
      (either/right {:working-dir   (get options :working-dir)
                     :package-input (first arguments)}))))

(defn validate-working-dir
  [{:keys [working-dir] :as config}]
  (let [dir (io/as-file working-dir)]
    (if (and (.exists dir)
             (.isDirectory dir))
      (either/right config)
      (either/left (str "Working directory \"" working-dir "\" does not exist or is not a directory.")))))

(def input-re #"^((@[a-zA-Z0-9-_]+?)/)?([a-zA-Z0-9-_]+?)(@(.+?))?$")

(defn parse-input
  [{:keys [package-input] :as config}]
  (let [match (re-matches input-re package-input)]
    (if match
      (either/right (let [[full _ organization name _ version] match]
                      (merge config
                             {:package-full full
                              :package      (str organization (when organization "/") name)
                              :organization organization
                              :name         name
                              :version      version})))
      (either/left "Invalid package."))))

(defn delete-recursively [fname]
  (let [func (fn [func f]
               (when (.isDirectory f)
                 (doseq [f2 (.listFiles f)]
                   (func func f2)))
               (clojure.java.io/delete-file f :silently true))]
    (func func (clojure.java.io/file fname))))

(defn clean
  [{:keys [working-dir] :as config}]
  (let [files-to-delete ["node_modules"
                         "tsconfig.json"
                         "package.json"
                         "package-lock.json"]]
    (doseq [file files-to-delete]
      (delete-recursively (str working-dir "/" file)))
    (either/right config)))

(defn install-compiler
  [{:keys [working-dir] :as config}]
  (let [{:keys [error]} (sh "npm" "install" "tsickle" "typescript" :dir working-dir)]
    (if error
      (either/left error)
      (either/right config))))

(defn install-package
  [{:keys [working-dir package-full] :as config}]
  (let [{:keys [error]} (sh "npm" "install" package-full :dir working-dir)]
    (if error
      (either/left error)
      (either/right config))))

(defn get-package-json
  [{:keys [package] :as config}]
  (let [package-json (-> (str "node_modules/" package "/package.json")
                         (slurp)
                         (json/read-str))]
    (either/right (assoc config :package-json package-json))))

(defn get-typings
  [{:keys [package organization package-json] :as config}]
  (let [typings (get package-json "typings")]
    (cond
      (= organization "@types") (either/right (merge config {:typings (str "node_modules/" package "/index.d.ts")}))
      (not-nil? typings) (either/right (merge config {:typings (str "node_modules/" package "/" typings)}))
      :else (either/left "Not a typescript package."))))

(def tsconfig
  {"compilerOptions" {"moduleResolution"                 "node"
                      "rootDir"                          "./"
                      "noImplicitReturns"                true
                      "noUnusedLocals"                   false
                      "module"                           "commonjs"
                      "noImplicitThis"                   false
                      "declaration"                      true
                      "forceConsistentCasingInFileNames" false
                      "lib"                              ["es6" "dom"]
                      "outDir"                           "goog"
                      "noImplicitAny"                    false
                      "target"                           "es5"
                      "experimentalDecorators"           false
                      "strictNullChecks"                 false
                      "suppressImplicitAnyIndexErrors"   true}})

(defn create-tsconfig
  [{:keys [typings working-dir] :as config}]
  (->> (assoc tsconfig "include" [typings])
       (json/write-str)
       (spit "tsconfig.json"))
  (either/right config))

(defn generate-extern
  [{:keys [name working-dir] :as config}]
  (let [{:keys [error]} (sh "node_modules/.bin/tsickle"
                            "--typed"
                            (str "--externs=externs/" name ".extern.js")
                            "--"
                            "--project" "."
                            :dir working-dir)]
    (if error
      (either/left error)
      (either/right config))))

(defn exit
  [code message]
  (when message
    (println message))
  (System/exit code))

(defn generate
  [args]
  (m/matchm (cats/alet [c1 (parse-cli args)
                        c2 (validate-working-dir c1)
                        c3 (parse-input c2)
                        c4 (clean c3)
                        c5 (install-compiler c4)
                        c6 (install-package c5)
                        c7 (get-package-json c6)
                        c8 (get-typings c7)
                        c9 (create-tsconfig c8)
                        c10 (generate-extern c9)
                        c11 (clean c10)]
                       c11)
            {:left error} (exit 1 error)
            {:right _}    (exit 0 nil)))

(defn -main
  [& args]
  (generate args))
