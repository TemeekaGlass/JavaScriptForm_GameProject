let paragraphString = "hello my name is not very important at the moment";// Want this to conatin an Input value Eventually

//let curVow = storedVowels[Math.floor(Math.random() * storedVowelsIndex.length)];
//let word = "hellO"; 
//let newWord;
//newWord = word.split("");
//let helloWord = [];

function getAndSwitchVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let arrayWord = word.split('')
  let storedVowelsIndex = [];
  let storedVowels = [];
  let vowelReplaceLoop;
//For everyword letter in the paragraph
  for (let l = 0; l < word.length; l++) {
//for every vowel in the word that includes the array of vowels
    for (let v = 0; v < vowels.length; v++) {
//if vowels matchs the letter store that vowel and the index of the vowel
      if (vowels[v] === word[l]) {
        storedVowelsIndex.push(word.indexOf(word[l]));
        storedVowels.push(word[l]);
      }
    }
  };
  //Storing the number of vowels in the letter loop because I can't use the length since I delete from the array
  vowelReplaceLoop = storedVowels.length;
  storedVowels.reverse();
  if (vowelReplaceLoop >= 2) {
  //while there are vowels still in stored vowels use the stored vowels and random pick from stored index to place the vowels   
    while (storedVowels.length > 0) {
      let curVal = storedVowelsIndex[0];
      let curVow = storedVowels[0];
      arrayWord.splice(curVal, 1, curVow);
      storedVowelsIndex.splice(storedVowelsIndex.indexOf(curVal), 1);
      storedVowels.shift(); 
        
    }
    return arrayWord.join('');
        
  }
  return arrayWord.join('');
};

function paragraphSwitch(paragraph) {
  let newPara = paragraph.split(' ');
  switchedVowelParagrapgh = [];
  //Run this function for each word found in the paragraph array above
  newPara.forEach(word => {
      switchedVowelParagrapgh.push(getAndSwitchVowels(word));

  })
  return switchedVowelParagrapgh;
};

console.log(paragraphSwitch(paragraphString));
