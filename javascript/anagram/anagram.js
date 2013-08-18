var Anagram = function (word) {
  this.target = this.toAnagramKey(word);
};

Anagram.prototype.match = function(words) { 
  return words.filter(this.isAnagram, this);
};

Anagram.prototype.toAnagramKey = function(word) { 
  return word.toLowerCase().split('').sort().join();
};

Anagram.prototype.isAnagram = function(word) { 
  return this.toAnagramKey(word) === this.target;
};

module.exports = Anagram;
