const removeFromArray = function(arrayElements, ...elementToRemove) {
     
  for (let i = 0; i < arrayElements.length; i += 1) {

    for (let j = 0; j < elementToRemove.length; j += 1) {
      let element = arrayElements[i];
      let eToRemove = elementToRemove[j];

       if (element === eToRemove) {
           arrayElements.splice(i, 1);  
           i -= 1;
       } 
    
    }
  
  }

    return arrayElements;
};

// Do not edit below this line
module.exports = removeFromArray;
