const range = (start, end, step = 1) => {
    const array = []
    for(let i = start; step > 0 ? i <= end : i >= end; i+=step){
        array.push(i);
    }
    return array;
};

const sum = (array) => {
    let total = 0;
    for(const item of array){
        total += item;
    }
    return total;
};


console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));