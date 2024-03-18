/*    Count Characters: Create a function that counts the number of characters in a string.
 */

function countCharacters(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }
  return charCount;
}

/* Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.*/

function capitalizeFirstLetterOfEachWord(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalizeFirstLetterOfEachWord("hello world, this is a test.")); // outputs "Hello World, This Is A Test."
