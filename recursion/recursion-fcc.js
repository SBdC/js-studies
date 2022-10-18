/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  }
  return multiply(arr, n - 1) * arr[n - 1];
}
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return sum(arr, n - 1) + arr[n - 1];
}

sum([1], 0); // should equal 0.
sum([2, 3, 4], 1); // should equal 2.
sum([2, 3, 4, 5], 3); // should equal 9.

// Use Recursion to Create a Countdown

function countdown(n) {
  if (n > 0) {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
  return [];
}

console.log(countdown(10));

function rangeOfNumbers(startNum, endNum) {
  if (startNum <= endNum) {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum);
    return countArray;
  }
  return [];
}

console.log(rangeOfNumbers(1, 5));

