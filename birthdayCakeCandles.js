// Count how many highest integers in an array

const birthdayCakeCandles = (candles) => {
    let maxNumber = Math.max(...candles);
    let quantity = candles.filter(candle => candle === maxNumber).length;

    return quantity;
}
