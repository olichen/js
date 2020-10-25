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
