// Given a square matrix, calculate the absolute difference between the sums of its diagonals

const diagonalDifference = (arr) => {
    let leftToRight = 0;
    let rightToLeft = 0;
    let diagonalDifference = 0;

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][arrLength - i - 1];
        diagonalDifference = leftToRight - rightToLeft;
    }

    return Math.abs(diagonalDifference);
}
