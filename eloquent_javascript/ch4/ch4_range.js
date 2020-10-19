function range(start, end, step = start < end ? 1 : -1) {
    let out = [];
    if (step > 0) {
        for (i = start; i <= end; i += step)
            out.push(i);
    } else {
        for (i = start; i >= end; i += step)
            out.push(i);
    }
    return out;
}

console.log(range(1, 10, 2));
console.log(range(5, 7));
console.log(range(5, -5, -3));

function sum(arr) {
    let sum = 0;
    for (let value of arr)
        sum += value;
    return sum;
}

console.log(sum(range(1, 10)));
console.log(sum(range(5, 7)));
