function reverseArray(arr) {
    let out = [];
    for (let i = arr.length - 1; i >= 0; i--)
        out.push(arr[i]);
    return out;
}

console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(["a", 2, "d", 1]))

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
let temp = [1, 2, 3, 4, 5];
reverseArrayInPlace(temp);
console.log(temp);
temp = ["a", 2, "d", 1];
reverseArrayInPlace(temp);
console.log(temp);
