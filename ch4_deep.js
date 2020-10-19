function deepEqual(ob1, ob2) {
    if (ob1 === ob2) return true;
    if (typeof ob1 !== typeof ob2) return false;
    if (ob1 === null || ob2 === null) return false;

    if (typeof ob1 === "object") {
        if (ob1.length !== ob2.length) return false;
        for (let key of Object.keys(ob1)) {
            if (!(key in ob2) || !(deepEqual(ob1[key], ob2[key])))
                return false;
        }
        return true;
    }
    return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null, null));
// → true
console.log(deepEqual(null, undefined));
// → false
