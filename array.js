/*Array Functions:

    Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
    */
//Find Maximum and Minimum
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return [max, arr.indexOf(max)]; //returning both min value and its index
}

console.log("Max Value is : " + getMax([2, 45, 67, 34, 89]));

function getMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return [min, arr.indexOf(min)]; //returning both min value and its index
}

console.log("Min Value and Its Index is : " + getMin([2, 45, 67, 34, 89]));

/*Task 2: Sort Array/*Sum of Array: Create a function that calculates the sum of all elements in an array.*/
function sumArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(
  "The sum of all elements in an array : " + sumArray([2, 45, 67, 34, 89])
);

/* Filter Array: Implement a function that filters out elements from an array based on a given condition.*/
function filterArray(arr, callback) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

//Example usage:
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = filterArray(numbers, (num) => num % 2 !== 0);
console.log(`Odd numbers are ${oddNumbers}`);
