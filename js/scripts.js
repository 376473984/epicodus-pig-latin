var vowel = ['a', 'e', 'i', 'o', 'u']

var translator = function(userText) {
// for words starting with one consonant
  if ((userText[0] !== 'a') && (userText[0] !== 'e') && (userText[0] !== 'i') && (userText[0] !== 'o') && (userText[0] !== 'u')) {
    var consonant = userText.slice(0, 1);
    userText = userText.replace(consonant, '');
    userText += consonant;
  }

  // for all word add "ay" to end
  return userText += "ay";
}
