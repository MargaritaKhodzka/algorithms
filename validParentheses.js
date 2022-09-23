let isValid = s => {

    const matchingPars = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    const collect = [];

    for (let i = 0; i < s.length; i++) {
        if (matchingPars[s[i]]) {
            collect.push(matchingPars[s[i]]);
        } else if (collect.length > 0 && collect[collect.length - 1] === s[i]) {
            collect.pop();
        } else {
            return false;
        }
    }
    return collect.length === 0;
};

// let s = '()';
// let s = '()[]{}';
// let s = '(]';

isValid(s);
