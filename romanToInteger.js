const romanToInt = s => {
    let translation = 
        {
            I:1,
            V:5,
            X:10,
            L:50,
            C:100,
            D:500,
            M:1000
        };

    let integers = [];

    for (let i = 0; i < s.length; i++) {
        integers.push(translation[s[i]]);
    }
    
    return integers.reverse().reduce((previousValue, currentValue, currentIndex, array) => {
        if (array[currentIndex] < array[currentIndex-1]) {
            return previousValue -= currentValue;
        } else {
            return previousValue += currentValue;
        }
    });
    
}

// s = "III";
// s = "LVIII";
// s = "MCMXCIV";

romanToInt(s);
