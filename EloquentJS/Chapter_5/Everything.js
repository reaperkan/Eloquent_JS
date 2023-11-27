

const every = (array, predicateFn) => {
    for(const item of array){
        if(!predicateFn(item)){
            return false;
        }
    }
    return true;
};

const every_2 = (array, predicateFn) => {
    return !array.some((val) => !predicateFn(val));
};

// console.log(every([1, 3, 5], n => n < 10));
// // → true
// console.log(every([2, 4, 16], n => n < 10));
// // → false
// console.log(every([], n => n < 10));
