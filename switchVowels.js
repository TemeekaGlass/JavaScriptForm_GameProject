//This was me trying something out - I just wanted to see if i could get the logic or Some kind of logic down
//for switching vowels
//this is ofcourse far from what it will be as I am not taking and retaining anything from an array yet

let paragraph2 = "hi my name is not very important at the Moment";// Want this to conatin an Input value Eventually
let letters = [];
let lettersToSwitch = [];


let word = "hellO"; 
let newWord;
newWord = word.split("");
let helloWord = [];


function separateParagraphIntoWords(paragraph){
  let separatedWord;
  let arrayParagraph = [];
  separatedWord = paragraph.split(" ");
  for (let i =0; separatedWord.length > i; i++){
    arrayParagraph.push(separatedWord[i]);
} 
return arrayParagraph;
}

function getVowels(word){
  //let vowels = ["a","e","i","o","u"];
for (let l = 0; word.length > l; l++ ){


  if (word[l] >= 3){   
    letters.push(word[l]);
  }
 /*  switch(letters){
    case 0: 
      letters.includes("a","e","i","o","u");

    default:
      continue;
  } */
}
//console.log(letters);
return letters;

}
test = separateParagraphIntoWords(paragraph2);

test.forEach(element => {
 if (element.length >= 3){
 console.log(element);
 }
});

console.log(test);
console.log(separateParagraphIntoWords(paragraph2));
    
    for (let i = 0; newWord.length > i; i++){
     helloWord.push(newWord[i]);
      if (helloWord.length == 5){ // this needs to equal the length of the input value and maybe find and retain the vowels found

        helloWord.splice(1, 1, 'O'); //This needs to be more dynamic and not hardcoded
        helloWord.splice(4, 1, 'e');
        console.log(helloWord);
      
      }
    

  }

