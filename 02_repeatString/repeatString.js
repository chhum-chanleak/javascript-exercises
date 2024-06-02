const repeatString = function(word, count) {

  if (count < 0) {
    return 'ERROR';
  }

  let repeatedWords = "";

  for(let i = 0; i < count; i += 1) {
    repeatedWords += word;
  }

  return repeatedWords;
};

// Do not edit below this linenod
module.exports = repeatString;
