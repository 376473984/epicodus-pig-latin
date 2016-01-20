// Behavior                                        Input          Output
// starts with vowel, add "ay" to the end        action         actionay
// move all starting consonants to end and add ay   toffee      offeetay
// treat starting y's as consonants              yellow         ellowyay
// if a u folows a starting q, move to end      squeal          ealsquay


describe('translator', function () {
  it('adds "ay" to the end of words', function() {
    //expect(translator('elephant')).to.equal('elephantay');
    expect(translator('action')).to.equal('actionay');
  });

  it('for words have one consonant before a vowel, it will move that consonant to the end of the word but before "ay"', function () {
    expect(translator('toffee')).to.equal('offeetay');
  });
});
