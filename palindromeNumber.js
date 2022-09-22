const isPalindrome = x => {
    let reversed = x.toString().split('').reverse().join('');
    let backToInt = parseInt(reversed);
    return x === backToInt ? true : false;
};

x = 10;

isPalindrome(x);
