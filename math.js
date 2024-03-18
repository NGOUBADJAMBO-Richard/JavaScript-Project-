/*

Mathematical Functions:
   */

/*    Factorial: Write a function to calculate the factorial of a given number.*/
function factorialNumber(num) {
  let fact = 1;
  if (num == 0) {
    return 1;
  }
  for (i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}

console.log(factorialNumber(6));

/* Prime Number Check: Create a function to check if a number is prime or not.*/
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(5)); // outputs true
console.log(isPrime(6)); // outputs false

/* Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )*/
function fibonacci(n) {
  // Check if n is a non-negative integer
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("n must be a non-negative integer");
  }

  // Base case: if n is 0 or 1, return n
  if (n <= 1) {
    return n;
  }

  // Recursive case: return the sum of the previous two Fibonacci numbers
  let prevPrev = 0;
  let prev = 1;
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = prev + prevPrev;
    prevPrev = prev;
    prev = result;
  }
  return result;
}

// Example usage:
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
// Output:
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
