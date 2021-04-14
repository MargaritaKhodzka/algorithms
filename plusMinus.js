const plusMinus = (arr) => {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let positiveRatio = 0;
    let negativeRatio = 0;
    let zeroRatio = 0;

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        if (arr[i] > 0) {positive++}
        else if (arr[i] < 0) {negative++}
        else {zero++}

        positiveRatio = positive/arrLength;
        negativeRatio = negative/arrLength;
        zeroRatio = zero/arrLength;
    }

    console.log(positiveRatio);
    console.log(Math.abs(negativeRatio));
    console.log(zeroRatio);
}
