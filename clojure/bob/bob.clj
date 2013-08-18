(ns bob
  (:require [clojure.string :as string]))


(defn- shouting? [content]
  (= (string/upper-case content) content))

(defn- question? [content]
  (= \? (last content)))

(defn- silence? [content]
  (string/blank? content))

(defn response-for [content] 
  (cond 
    (silence? content ) "Fine, be that way."
    (shouting? content) "Woah, chill out!"
    (question? content) "Sure."
    :else "Whatever."))

