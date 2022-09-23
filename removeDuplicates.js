let removeDuplicates = nums => {
    nums.reduce(function (prev, curr) { 
        console.log('prev: ' + prev);
        console.log('curr: ' + curr);
        console.log(prev.indexOf(curr));

        if (prev.indexOf(curr) === -1) {
            prev.push(curr);
        }

        console.log(prev);
        return prev;
    }, []);
};

let nums = [1, 1, 2];

removeDuplicates(nums);
