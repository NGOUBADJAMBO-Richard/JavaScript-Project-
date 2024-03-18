/*String Manipulation Functions:

    Reverse a String: Write a function that reverses a given string.*/

function reverseString(str) {
  let start = 0;
  let end = str.length - 1;
  let arr = Array.from(str); // convert the string to an array
  while (start < end) {
    let temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    start++;
    end--;
  }
  return arr.join(""); // convert the array back to a string
}
console.log(reverseString("Hello World")); // outputs "dlroW olleH"
