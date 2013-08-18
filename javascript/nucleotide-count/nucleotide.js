var DNA_NUCLEOTIDES = ["A", "T", "C", "G"];
var ALL_NUCLEOTIDES = ["A", "T", "C", "G", "U"];

var DNA = function (sequence) { 
  this.sequence = sequence;
  this.nucleotideCounts = this.parseNucleotides(); 
};

DNA.prototype.parseNucleotides = function () {
  results = {};
  DNA_NUCLEOTIDES.forEach(function (nucleotide) {
    results[nucleotide] = this.count(nucleotide);
  }, this);
  return results;
};

DNA.prototype.count = function (nucleotide) {
  if (ALL_NUCLEOTIDES.indexOf(nucleotide) < 0) { 
    throw "Invalid Nucleotide";
  }

  if (this.nucleotideCounts && this.nucleotideCounts[nucleotide]) {
    return this.nucleotideCounts[nucleotide];
  } else {
    var regex = new RegExp(nucleotide, "g");
    return (this.sequence.match(regex) || []).length ;
  }
};

module.exports = DNA;
