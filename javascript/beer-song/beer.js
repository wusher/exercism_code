var VerseText = {
  bottleText: function (count) { 
    return (count == 1) ? "bottle" : "bottles";
  },
  verseX: function (count) { 
    var remaining = count - 1;
    return "" + count + " bottles of beer on the wall, " + count + " bottles of beer.\nTake one down and pass it around, " + remaining + " " + VerseText.bottleText(remaining) + " of beer on the wall.\n";
  }, 
  verse1: function (){ 
    return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
  },
  verse0: function (){ 
    return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
  }
};

var Beer = {
  verse: function (count) { 
    if (count > 1) { 
      return VerseText.verseX(count);
    } else if (count === 1) { 
      return VerseText.verse1();
    } else { 
      return VerseText.verse0();
    }
  },

  sing: function (start, end) { 
    if (!end) { end = 0; }
    var lines = [];
    for ( var i = start; i >= end; i-- ) {
      lines.push( Beer.verse(i));
    }
    return lines.join("\n");
  }
};

module.exports = Beer;
