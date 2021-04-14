const staircase = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let spaceCount = 1; spaceCount <= n-i; spaceCount++) {
            row += ' ';
        }

        for (let hashCount = 1; hashCount <= i; hashCount++) {
            row += '#';
        }

        console.log(row);
    }
}
