const bigSorting = unsorted => {
    if (unsorted.length <= 1) return unsorted;

    let half = Math.floor(unsorted.length / 2);

    // recursive calls
    let left = bigSorting(unsorted.slice(0, half));
    let right = bigSorting(unsorted.slice(half));

    return merge(left, right);
}

const merge = (left, right) => {
    // the sorted items will go here
    let resultArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            resultArray.push(left.shift());
        } else {
            resultArray.push(right.shift());
        }
    }
    
    return [...resultArray, ...left, ...right];
}

let unsorted = [1, 200, 150, 3];
// console.log(merge([1, 200], [150, 3]));
console.log(bigSorting(unsorted));
