let a = [-6, 5, 7, 10, -9, -9, 5];
//let count = 5;
let missingNum = new Array();

function missingNumbers(array){
//let count = array[array.length-1]
//Comparing the Existing and non existing array Index - if it equals -1 it doesn't exist in the array
// and the length/number tied to that spot that returns -1 is pushed up to the missingNum Array
for (let i = Math.min(...array); i < Math.max(...array); i++) {
  if (array.indexOf(i) == -1) {
    missingNum.push(i);
  }
}
return missingNum;
}

console.log(missingNumbers(a));