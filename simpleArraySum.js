// find the sum of integers in an array
const simpleArraySum = (ar) => {
    const reducer = (a, b) => a + b;
    const sum = ar.reduce(reducer);
    return sum;
}
