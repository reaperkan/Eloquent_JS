
let array = [[1,2],[3,4],[5,6]];

const flatten = (array) =>{
   return array.reduce((a,b) => a.concat(b), []);
};

console.log(flatten(array));