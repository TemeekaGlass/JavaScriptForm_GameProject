

//This was me trying something out - I just wanted to see if i could get the logic or Some kind of logic down
//for switching vowels
//this is ofcourse far from what it will be as I am not taking and retaining anything from an array ye



let paragraph = "hello my name is not very important at the moment";// Want this to conatin an Input value Eventually
newPara = paragraph.split(' ');
const vowels = ['a','e','i','o','u', 'y'];
let lettersToSwitch = [];

switchedVowelParagrapgh = [];
newPara = paragraph.split(" ");

//let word = "hellO"; 
//let newWord;
//newWord = word.split("");
//let helloWord = [];


function separateParagraphIntoWords(paragraph){
  let separatedWord;

  separatedWord = paragraph.split(" ");
  for (let i = 0; i < separatedWord.length; i++){
    arrayParagraph.push(separatedWord[i]);
} 
return arrayParagraph;
};


function getAndSwitchVowels(word){
  //console.log(word.length);
  let arrayWord = word.split('') 
  let storedVowelsIndex = [];
  let storedVowels = [];
  //let randomizeStoredValue = [];//storedVowelsIndex[(Math.random() * storedVowelsIndex.length) | 0];
  let dontStopLoop;
  
  for (let l = 0; l < word.length; l++){
    
    for (let v = 0; v < vowels.length; v++){
     
      if (vowels[v] === word[l]){ 
        storedVowelsIndex.push(word.indexOf(word[l]));
        storedVowels.push(word[l]); 
        //console.log(word[l]);
        dontStopLoop = storedVowels.length;
        //console.log(storedVowelsIndex + ' ope');

      // randomizeStoredValue =  storedVowelsIndex[Math.floor(Math.random() * storedVowelsIndex.length)];

      //randomizeStoredValue =  storedVowelsIndex[Math.floor(Math.random() * storedVowelsIndex.length)];
      }      
  } 
  
}
       
if(dontStopLoop >= 2){
  //console.log(curVow + ' omh');
  //console.log(curVal);
  //console.log(dontStopLoop);
  while (storedVowels.length > 0){
  //console.log(dontStopLoop);
  let curVal = storedVowelsIndex[Math.floor(Math.random() * storedVowelsIndex.length)];
  let curVow = storedVowels[0];
  //console.log(storedVowels + ' jeeeezus');
  //console.log(curVow + ' omh');
  //console.log(curVal + ' dfg');
  arrayWord.splice(curVal, 1, curVow);
  storedVowelsIndex.splice(storedVowelsIndex.indexOf(curVal), 1);
  storedVowels.shift();

  }
  return arrayWord.join('');
  //console.log(arrayWord);
  //console.log(storedVowels);
  }
  return arrayWord.join('');

//console.log(arrayWord);
  
  };


while (newPara.length > 0){    
  //if(newPara.length > 0){
  getAndSwitchVowels(newPara[0]);
  switchedVowelParagrapgh.push(getAndSwitchVowels(newPara[0]));
  newPara.shift();
 // console.log(switchedVowelParagrapgh);
   // console.log(newPara);
}

console.log(switchedVowelParagrapgh);




/* function getAndSwitchVowels(word){

//let numVowels = 0;

let wordArray = paragraph1.split(' ');

console.log(word.length);

//if (wordArray.length > 0){

word.forEach(element => {

for (let l = 0; l < element.length; l++){
  
  for (let v = 0; v < vowels.length; v++){
   
    if (vowels[v] === element[l]){ 
     /*  while (numWords < paragraph1.length){
         
        
        numWords++
      } 
      
      storedVowels.push(element[l]);
      //numVowels++
      //let toSee = word[l] + word.indexOf(word[l]);
      //console.log(word[l] + word.indexOf(word[l]));
      //console.log(storedVowels);
     
      console.log(element[l]);
      //console.log(numVowels);
        //return storedVowels;  
    } 

}

}

//console.log(word);
});
//word.splice(0,1);
//word.shift();
//console.log(word)
console.log(storedVowels);

};*/



/* 
 test.forEach(element => {
 if (element === 'a'){
 console.log(element);
 }
});  
*/

//let test = paragraph.split(' ');


/* test.forEach(element => {
  getAndSwitchVowels(element)
}
); 
*/
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