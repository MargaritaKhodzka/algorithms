// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers

const miniMaxSum = (arr) => {
    let sum = arr.reduce((a, b) => a + b);
    let minSum = sum - Math.max(...arr);
    let maxSum = sum - Math.min(...arr);
    console.log(minSum, maxSum);
}
