"use strict";

var Bob = function () { 
};

Bob.prototype = {
  hey: function (content) { 
    var message = new Message(content);

    if (message.isShouting()) {
      return "Woah, chill out!";
    } else if (message.isSilence()){
      return "Fine, be that way!";
    } else if (message.isQuestion()) {
      return "Sure.";
    } else {
      return "Whatever.";
    }
  }
};

var Message = function (content) {
  this.content = content;
};

Message.prototype = { 
  isShouting: function() {
    return !this.isSilence() && this.content === this.content.toUpperCase();
  },
  isQuestion: function() {
    return (!this.content || /\?$/.test(this.content));
  },
  isSilence: function() { 
    return (!this.content || /^\s*$/.test(this.content));
  }
};

module.exports = Bob;
