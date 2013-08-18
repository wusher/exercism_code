var Words = function (sentence) { 
  sentence = this.normalizeSentence(sentence);
  var words = this.getWords(sentence);
  this.count = this.buildCounts(words);
};


Words.prototype.normalizeSentence = function(sentence) {
  return sentence.toLowerCase();
};

Words.prototype.getWords = function(sentence) {
  return sentence.match(/\w+/g);
};

Words.prototype.buildCounts  = function(words) {

  var data = {};
  words.forEach( function (word) { 
    if (data[word]) {
      data[word] += 1;
    } else { 
      data[word] = 1;
    }
  });

  return data;
};
module.exports = Words;
