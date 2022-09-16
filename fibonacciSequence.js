const num = 100;
const num2 = 12;
let n1 = 0, n2 = 1, combN;

let numA = 0, numB = 1, combN2;

console.log('Fibonacci Series 1:');
console.log(n1); // print 0
console.log(n2); // print 1
combN = n1 + n2;




//up to a certain number
 while (combN <= num) {

    // print the comination of num1 + num2
    console.log(combN);
    n1 = n2;
    n2 = combN;
    combN = n1 + n2;
} 

console.log('Fibonacci Series 2:');
combN2 = numA + numB;

//Creates a sequence the number of times entered
for (let i = 1; i <= num2; i++) {
    console.log(numA);
    combN2 = numA + numB;
    numA = numB;
    numB = combN2;
}
