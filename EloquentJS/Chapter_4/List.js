
const arrayToList = (array)=>{
    let list = null;
    for(let i = array.length - 1; i >= 0 ; i--){
        list = {value: array[i], rest: list};
    }

    return list;
};

const listToArray = (list) => {
    let listItem = list;
    const array = [];
    while(listItem){
        array.push(listItem.value);
        listItem = listItem.rest;
    }
    return array;
};

const prepend = (element, list) => {
    return {value: element, rest: list};
}

const nth = (list, index) => {
    for(let i = list,counter = 0; i !== null; i = i.rest){
        if(counter === index){
            return i.value;
        }
        counter++;
    }

    return undefined;
}

const recursiveNth = (list, n) => {
    if(list == null) return undefined;
    else if(n == 0) return list.value;
    else return recursiveNth(list.rest, n - 1);
};

let array = [1,2,3];
let list = arrayToList(array);
let arrayFromList = listToArray(list);

console.log("List from Array: ", list);
console.log("Array From List: ", arrayFromList);
console.log("Prepend: ", prepend(5, list));
console.log("Array From List: ", listToArray(prepend(5, list)));
console.log("Nth: ", nth(list,4));
console.log("Nth: ", nth(list,0));
console.log("Nth: ", nth(list,1));
console.log("Nth: ", nth(list,2));

console.log("Recursive Nth: ", recursiveNth(list,4));
console.log("Recursive Nth: ", recursiveNth(list,0));
console.log("Recursive Nth: ", recursiveNth(list,1));
console.log("Recursive Nth: ", recursiveNth(list,2));