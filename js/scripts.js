

var translator = function(userText) {
  var newString;
// for words starting with one consonant
  if (!userText.match(/^[aeiou]/i)) {
    if (!userText[1].match(/[aeiou]/i)) {
      var beginningConsonants = userText.slice(0, 2);
      newString = userText.slice(2) + beginningConsonants;
    } else {
    var firstLetter = userText.slice(0, 1);
    newString = userText.slice(1) + firstLetter;
    }
  } else {
    newString = userText;
  }

  // for all word add "ay" to end
  return newString += "ay";
}
