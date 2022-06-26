/*
I : sentence
O : -The number of vowels in the sentence
    -The length of the sentence
    -The number of words in the sentence
C :
E : - The sentence must end with a point
    - The length of the sentence without space
    - The number of words in the sentence without ".",","
    let set1 = [3, 1, 7, 9]
    let set2 = [2, 4, 1, 9, 3]
 */


let sentence = "write here a sentence";
let sentenceLastChar = sentence[sentence.length - 1];
let word = sentence.split(" ");
let joinWord = word.join();
let char = joinWord.split("");

let numberOfVowels = 0;
let lengthOfSentence = 0;
let numberOfWords = 0;

if (sentenceLastChar == ".") {
  //The number of vowels in the sentence
  for (let i = 0; i < char.length; i++) {
    if (
      char[i] == "a" ||
      char[i] == "e" ||
      char[i] == "i" ||
      char[i] == "o" ||
      char[i] == "u"
    ) {
      numberOfVowels += 1;
    }
  }
  console.log("The number of vowels in the sentence :", numberOfVowels);
  //The length of the sentence
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") continue;
    lengthOfSentence += 1;
  }
  console.log("The length of the sentence :", lengthOfSentence);
  //The number of words in the sentence
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "." || word[i] == ",") continue;
    numberOfWords += 1;
  }
  console.log("The number of words in the sentence  :", numberOfWords);
} else {
  console.log("the sentence must end with a point");
}
