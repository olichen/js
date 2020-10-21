class GroupIterator {
    constructor(group) {
        this.i = 0;
        this.group = group;
    }

    next() {
        if (this.i >= this.group.length) return {done: true};
        let value = {value: this.group.set[this.i], done: false};
        this.i++;
        return value;
    }
}

class Group {
    constructor() {
        this.set = [];
    }

    static from(values) {
        let group = new Group();
        for (let v of values) {
            group.add(v);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

    get length() {
        return this.set.length;
    }

    add(v) {
        if (!this.has(v))
            this.set.push(v);
    }

    delete(v) {
        this.set = this.set.filter(x => x !== v);
    }

    has(v) {
        return this.set.indexOf(v) !== -1;
    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
