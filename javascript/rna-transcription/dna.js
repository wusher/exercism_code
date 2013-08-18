var RNA_LOOKUP = { "C": "C", "G": "G", "A": "A", "T": "U"};

var DNA = function (sequence) { 
  this.sequence = sequence;
};

DNA.prototype.toRNA = function () { 
  var nucleotides = this.sequence.split('');
  var rna = nucleotides.map(this.dnaToRna);
  return rna.join("");
};

DNA.prototype.dnaToRna = function (nucleotide) { 
  return RNA_LOOKUP[nucleotide];
};

module.exports = DNA;
