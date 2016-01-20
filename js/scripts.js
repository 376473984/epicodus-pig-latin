

var translator = function(userText) {
  var newString;
// for words that do not start with a vowel
  if (!userText.match(/^[aeiou]/i)) {
    //check for qu and have separate loop excluding u
    if (userText.match(/qu/i)) {
      for (var index = 0; !userText[index].match(/[aeio]/i); index ++) {
        var beginningConsonants = userText.slice(0, index+1);
      }
      newString = userText.slice(index) + beginningConsonants;
    } else {
      for (var index = 0; !userText[index].match(/[aeiou]/i); index ++) {
        var beginningConsonants = userText.slice(0, index+1);
      }
      newString = userText.slice(index) + beginningConsonants;
    }
    
  } else {
    // if the first letter is a vowel
    newString = userText;
  }

  // for all word add "ay" to end
  return newString += "ay";
}
