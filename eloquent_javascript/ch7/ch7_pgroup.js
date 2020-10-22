class PGroup {
    constructor() {
        this.set = [];
    }

    add(v) {
        if (this.set.indexOf(v) !== -1) return this;
        let group = new PGroup();
        for (let old_v of this.set)
            group.set.push(old_v);
        group.set.push(v);
        return group;
    }

    delete(v) {
        if (this.set.indexOf(v) === -1) return this;
        let group = new PGroup();
        for (let old_v of this.set) {
            if (old_v === v) continue;
            group.set.push(old_v);
        }
        return group;
    }

    has(v) {
        return this.set.indexOf(v) !== -1;
    }
}

PGroup.empty = new PGroup();


let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
