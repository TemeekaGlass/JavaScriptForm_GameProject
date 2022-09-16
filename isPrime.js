import {swapSort, getSecondLargestinSortedArray} from './canSort.js'

let num = 60;
let givenArray = [ 6, 9 ,-23, 21, 76, 3, 45, 47, 63]
let primeArray = [];
let notPrime = [];
let arrayNum = [];


function createNumArray(num) {
    let numArray = [];
    for (let i = 0; i <= num; i++) {
      while (i <= num) {
        numArray.push(i);
        break;
      }
    }
    //console.log(numArray)
    return numArray;
  }

  arrayNum = createNumArray(num);
  //let notPrimeArray = [];

  function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      //return num > 1 to just return positive integers
       return num;
    }
  
givenArray = givenArray.filter(isPrime);
console.log(givenArray); 
givenArray = swapSort(givenArray)
console.log(givenArray);
console.log(getSecondLargestinSortedArray(givenArray)); 

arrayNum = arrayNum.filter(isPrime);
console.log(arrayNum); 
arrayNum = swapSort(arrayNum)
console.log(arrayNum);
console.log(getSecondLargestinSortedArray(arrayNum)); 

//console.log(arrayNum.filter(isPrime));
