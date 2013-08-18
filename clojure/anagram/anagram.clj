(ns anagram
  (:require [clojure.string :as string]))

(defn- to-anagram-key [word]
  (-> word string/lower-case sort ))

(defn- is-anagram [target word]
  (= (to-anagram-key target) (to-anagram-key word)))

(defn anagrams-for [target words] 
  (filter (fn [word]
              (is-anagram target word))
           words))
