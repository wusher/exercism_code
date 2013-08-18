(ns dna
  (:require [clojure.string :as string]))

(defn- dna-to-rna [value]
  (cond
    (= value \C) "C"
    (= value \G) "G"
    (= value \A) "A"
    (= value \T) "U"
    :else (throw (Exception. "Invalid Nucleotide"))))

(defn to-rna [proteins]
  (apply str (map dna-to-rna (seq proteins))))
