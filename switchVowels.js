//This was me trying something out - I just wanted to see if i could get the logic or Some kind of logic down
//for switching vowels
//this is ofcourse far from what it will be as I am not taking and retaining anything from an array yet

let paragraph = "hi my name is not very important at the moment";// Want this to conatin an Input value Eventually
const vowels = ['a','e','i','o','u'];
let letters = [];
let lettersToSwitch = [];
//let numVowels = 0;
let storedVowels = [];
newPara = paragraph.split(" ");

//let word = "hellO"; 
//let newWord;
//newWord = word.split("");
//let helloWord = [];


function separateParagraphIntoWords(paragraph){
  let separatedWord;
  let arrayParagraph = [];
  separatedWord = paragraph.split(" ");
  for (let i = 0; i < separatedWord.length; i++){
    arrayParagraph.push(separatedWord[i]);
    //getVowels(arrayParagraph);

} 
return arrayParagraph;
};

function getAndSwitchVowels(paragraph1){

let numWords = 0;
let numVowels = 0;

word = paragraph1.split(' ');

word.forEach(element => {

for (let l = 0; l < element.length; l++){
  
  for (let v = 0; v < vowels.length; v++){
   
    if (vowels[v] === element[l]){ 
     /*  while (numWords < paragraph1.length){
         
        
        numWords++
      } */
      storedVowels.push(element[l]);
      numVowels++
      //let toSee = word[l] + word.indexOf(word[l]);
      //console.log(word[l] + word.indexOf(word[l]));
      //console.log(storedVowels);
     
      console.log(element[l]);
      console.log(numVowels);
        //return storedVowels;  
    } 

}

}

console.log(word);
});
//storedVowels = storedVowels.join('');
console.log(storedVowels);
      console.log(newPara.length);
//console.log(toSee);
};



/* 
 test.forEach(element => {
 if (element === 'a'){
 console.log(element);
 }
});  */

//let test = paragraph.split(' ');


/* test.forEach(element => {
  getAndSwitchVowels(element)
}
); */
console.log(getAndSwitchVowels(paragraph));



//console.log(test);



//console.log(test);
//console.log(getVowels(paragraph));
//console.log(test.join(' ') + ' (2nd log)');


//console.log(separateParagraphIntoWords(paragraph2));
//console.log(getVowels(test) + ' (4th log)');
//console.log(test + ' (5th log)');

    
  /*   for (let i = 0; newWord.length > i; i++){
     helloWord.push(newWord[i]);
      if (helloWord.length == 5){ // this needs to equal the length of the input value and maybe find and retain the vowels found

        helloWord.splice(1, 1, 'O'); //This needs to be more dynamic and not hardcoded
        helloWord.splice(4, 1, 'e');
        console.log(helloWord);
      
      }
    

  }

 */