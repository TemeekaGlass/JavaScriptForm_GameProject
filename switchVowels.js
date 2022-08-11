//This was me trying something out - I just wanted to see if i could get the logic or Some kind of logic down
//for switching vowels
//this is ofcourse far from what it will be as I am not taking and retaining anything from an array yet


let word = "hellO"; // Want this to conatin an Input value Eventually
let newWord = null;
newWord = word.split("");
let helloWord = [];
    
    for (let i = 0; newWord.length > i; i++){
     helloWord.push(newWord[i]);
      if (helloWord.length == 5){ // this needs to equal the length of the input value and maybe find and retain the vowels found

        helloWord.splice(1, 1, 'O'); //This needs to be more dynamic and not hardcoded
        helloWord.splice(4, 1, 'e');
        console.log(helloWord);
      
      }
    

  }

  /* String inputValue = "Hello to you";
   System.out.println(inputValue.reverse());
  char[] inputChar = inputValue.toCharArray();
  int length = inputChar.length;
  for(int i = length -1; i >= 0; i--){
    System.out.println(inputChar[i]);
  } 
  
}*/
