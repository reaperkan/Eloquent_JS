
const deepEqual = (value_1, value_2) => {
    if((value_1 === null || typeof value_1 !== "object") && ((value_2 === null || typeof value_2 !== "object"))){
        return value_1 === value_2;
    }
    for(let key of Object.keys(value_1)){
        if(value_2[key])
            return deepEqual(value_1[key], value_2[key]);
        else 
            return false;
    }
};
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

let val = 1;
let val2 = 3;

// Solution
// function deepEqual(a, b) {
//     if (a === b) return true;
 
//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;
  
//     let keysA = Object.keys(a), keysB = Object.keys(b);
  
//     if (keysA.length != keysB.length) return false;
  
//     for (let key of keysA) {
//       if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
  
//     return true;
//   }

console.log(deepEqual(null, undefined))