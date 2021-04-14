// Calculate and print the sum of the elements in an array

const aVeryBigSum = (ar) => {
    let sum = ar.reduce((a, b) => a + b, 0);
    return sum;
}
