const searchInsert = (nums, target) => {
    let last = nums.length - 1;
    let first = 0;

    while (first < last) {
        let middle = Math.round((first+last)/2);

        if (nums[middle] === target) {
            return middle;
        } else if (target > nums[middle]) {
            first = middle + 1
        } else {
            last = middle - 1
        }
    }
    console.log(nums[first] < target ? first+1 : first);
    return nums[first] < target ? first+1 : first;
};

let nums = [1,3,5,6];
let target = 7;

// let nums = [1,3,5,6];
// let target = 2;

// let nums = [1,3,5,6];
// let target = 5;

searchInsert(nums, target);
