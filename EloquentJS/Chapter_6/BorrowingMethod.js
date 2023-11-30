

let map = {test: 'fire' , foo: 'bar', hasOwnProperty: false};

console.log(Object.prototype.hasOwnProperty.call(map, 'test'));