

var translator = function(userText) {
  var newString;
// for words that do not start with a vowel
  if (!userText.match(/^[aeiou]/i)) {
    // if the second letter is also not a vowel
    if (!userText[1].match(/[aeiou]/i)) {
      var beginningConsonants = userText.slice(0, 2);
      newString = userText.slice(2) + beginningConsonants;
    } else {
      // if the second letter is a vowel
    var firstLetter = userText.slice(0, 1);
    newString = userText.slice(1) + firstLetter;
    }
  } else {
    // if the first letter is a vowel
    newString = userText;
  }

  // for all word add "ay" to end
  return newString += "ay";
}
