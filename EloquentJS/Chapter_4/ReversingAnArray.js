const reverse = (array) => {
    const newArray = [];
    for(const i of array){
        newArray.unshift(i);
    }
    return newArray;
};

// Interesting side effect example, array if reassigned a new array does not work but we can change
// data with the indexes.
const reverseInPlace = (array) => {
    for(let i = 0; i< Math.floor(array.length/2); i++){
        let old = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = old;
    }
    return array;
};

let array = [1,2,3,4,5];
console.log("reverse: ",reverse(array));
console.log("original: ",array);
reverseInPlace(array);
//array=reverseInPlace(array);
console.log("original: ", array);