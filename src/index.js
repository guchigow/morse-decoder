const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const binArrWords = expr.split('**********');
  const wordsArr = [];
  const endLetter = 10;
  for (let i = 0; i < binArrWords.length; i += 1) {
    const binWord = binArrWords[i];
    let word = '';
    let morseLetter = '';
    let startSym = false;
    let charCount = 0;
    for (let j = 0; j < binWord.length; j += 1) {
      charCount += 1;
      const curSym = binWord[j];
      if (!startSym && curSym === '1') {
        startSym = true;
      } else if (startSym) {
        if (curSym === '0') morseLetter += '.';
        if (curSym === '1') morseLetter += '-';
        startSym = false;
      }
      if (charCount === endLetter) {
        word += MORSE_TABLE[morseLetter];
        morseLetter = '';
        charCount = 0;
      }
    }
    wordsArr.push(word);
    word = '';
  }
  return wordsArr.join(' ');
}

module.exports = {
  decode,
};
