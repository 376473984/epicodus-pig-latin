
//turn a word into a piglatin word
var translator = function(word) {
  var newString;

  if (word.match(/^(y)/i)) {
    var beginningConsonants = word.slice(0, 1);
    newString = word.slice(1) + beginningConsonants;

  } else if (!word.match(/^[aeiou]/i) && word.match(/[aeiouy]/i)) {
    //check for qu and have separate loop excluding u
    if (word.match(/qu/i)) {
      for (var index = 0; !word[index].match(/[aeioy]/i); index ++) {
        var beginningConsonants = word.slice(0, index+1);
      }
      newString = word.slice(index) + beginningConsonants;
    } else {
      for (var index = 0; !word[index].match(/[aeiouy]/i); index ++) {
        var beginningConsonants = word.slice(0, index+1);
      }
      newString = word.slice(index) + beginningConsonants;
    }
  } else {
    // if the first letter is a vowel
    newString = word;
  }
  return newString += "ay";
};

//return the end result
var sentenceTranslator = function(userText) {

  var wordArray = userText.split(' ');
  var translatedArray = [];

  wordArray.forEach(function(word) {
  translatedArray.push(translator(word));
});
  return translatedArray.toString().replace(/,/g, " ");
};

$(document).ready(function() {
  $("form#input").submit(function(event) {
    var userText = $('textarea#userText').val();

    $('#result').text(sentenceTranslator(userText));

    event.preventDefault();
  });
});
