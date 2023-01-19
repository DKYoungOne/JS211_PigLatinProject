'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


const pigLatin = (word) => {
  let output;
  // Your code here
  let input = word.toLowerCase().trim();
  let toSlice;
  let pop;
  let slicedWords = [];
  if (input[0] === 'a' || input[0] === 'e' || input[0] === 'i' || input[0] === 'o' || input[0] === 'u') {
    output = input + 'yay';
  }
  else if (input[0] != 'a' || input[0] != 'e' || input[0] != 'i' || input[0] != 'o' || input[0] != 'u') {
    toSlice = 0;
    while (input[toSlice] != 'a' || input[toSlice] != 'e' || input[toSlice] != 'i' || input[toSlice] != 'o' || input[toSlice] != 'u') {
      slicedWords.push(input[toSlice])
      toSlice += 1;
      
      if (input[toSlice] === 'a' || input[toSlice] === 'e' || input[toSlice] === 'i' || input[toSlice] === 'o' || input[toSlice] === 'u') {
        break;
      } else if (toSlice === input.length) {
        return output = input + 'ay';
      }
    }
    
    let pop = input.slice(toSlice);
    let finalSlice = slicedWords.join("");
    output = pop + finalSlice + 'ay';
    
  
    
    console.log(toSlice);
    console.log(pop);
    console.log(input);
    console.log(slicedWords);
  } 
  
  
  return output;
}

let input = '';

let userInput = document.getElementById("user-input");
let userOutput= document.getElementById("user-output");

userInput.addEventListener('keyup', (e) => {
  input = e.target.value;
  console.log(input);
  // console.log(pigLatin(input))
})

translate.addEventListener('click', (e) => {
  let words = input.split(' ')
  let pigWord = words.map(word => pigLatin(word)).join(' ')
  userOutput.innerText = pigWord;
})

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// // Unit Tests
// // to use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
