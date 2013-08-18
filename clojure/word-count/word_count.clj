(ns phrase
  (:require [clojure.string :as string]))

(defn- normalize-sentence [sentence] 
  (string/lower-case sentence))

(defn- sentence-to-words [sentence]
  (re-seq #"\w+" sentence))

(defn- words-to-counted-hash [words]
  (frequencies words))

(defn word-count [sentence]
  (-> sentence normalize-sentence
               sentence-to-words
               words-to-counted-hash))
