
class Group{
    constructor(){
        this.group = [];
    }

    add(value){
        if(this.has(value)){
            return;
        }

        this.group.push(value);
    }

    delete(value){
        if(!this.has(value))
            return;
        this.group = this.group.filter(val => val !== value);
    }

    has(value){
        return this.group.indexOf(value) >= 0;
    }

    static from(iterable){
        if(!iterable[Symbol.iterator])
            return;
        const group = new Group();
        for(const val of iterable){
            group.add(val);
        }
        return group;
    }

    // solution 
    // [Symbol.iterator]() {
    //     return new GroupIterator(this);
    //   }
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

class GroupIterator{
    constructor(group){
        this.group = group;
        this.pos = 0;
    }

    next(){
        if(this.pos === this.group.group.length)
            return {done: true};

        const value = this.group.group[this.pos];
        this.pos++;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}