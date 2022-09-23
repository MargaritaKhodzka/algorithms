const removeElement = (nums, val) => {
    let i = 0;
    
    while (i < nums.length) {
      if (nums[i] === val) {
        nums.splice(i, 1);
      } else {
        ++i;
      }
    }
    console.log(nums.length)
    return nums.length;
};

let nums = [0,1,2,2,3,0,4,2];
let val = 2;

// let nums = [3,2,2,3];
// let val = 3;

removeElement(nums, val);
