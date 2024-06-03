const sumAll = (init, termi) => {

  if ((init < 0 || termi < 0) || 
     ((typeof init) !== 'number' || (typeof termi) !== 'number')) {
      return 'ERROR';
  }

  let reverseInit = termi;
  let reverseTermi = init

   if (init > termi) {
      termi = reverseTermi;
       init = reverseInit;
  }
  
  let nextNum = 0;
  let diff = 1;
  let total = 0;
  let sumTimes = termi - init;
  let currentSum = init;
  
  for(let i = 0; i < sumTimes; i += 1) {
      
      nextNum = init + diff;
      diff += 1;
      currentSum += nextNum;
      total = currentSum;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
