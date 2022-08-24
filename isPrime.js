let num = 600;
let primeArray = [];
let notPrime = [];
let arrayNum = [];


function createNumArray(num) {
    let numArray = [];
    for (i = 0; i <= num; i++) {
      while (i <= num) {
        numArray.push(i);
        break;
      }
    }
    //console.log(numArray)
    return numArray;
  }

  arrayNum = createNumArray(num);
  let notPrimeArray = [];

  function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
       return num > 1;
    }
  
    
console.log(arrayNum.filter(isPrime));