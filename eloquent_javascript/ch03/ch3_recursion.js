function isEven(num) {
    if (num < 0) return isEven(-num);
    if (num === 1) return false;
    if (num === 0) return true;
    return isEven(num - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
