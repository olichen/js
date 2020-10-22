class PGroup {
    constructor(set) {
        this.set = set;
    }

    add(v) {
        if (this.has(v)) return this;
        return new PGroup(this.set.concat(v));
    }

    delete(v) {
        if (!this.has(v)) return this;
        return new PGroup(this.set.filter(x => (x !== v)));
    }

    has(v) {
        return this.set.includes(v);
    }
}

PGroup.empty = new PGroup([]);


let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
