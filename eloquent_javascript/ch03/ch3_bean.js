function countBs(s) {
    return countChars(s, 'B');
}

function countChars(s, c) {
    let count = 0;
    for (let i = 0; i < s.length; i++)
        if (s[i] === c) count += 1;
    return count;
}

console.log(countBs('BBB'))
console.log(countChars('ABC', 'A'))
