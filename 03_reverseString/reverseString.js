const reverseString = function(string) {
  let strToArray = string.split('');
  let reversedChar = [];

  for (let i = 0; i < string.length; i += 1) {
    reversedChar.push(strToArray.pop());
  }

  return reversedChar.join('');
};


// Do not edit below this line
module.exports = reverseString;
