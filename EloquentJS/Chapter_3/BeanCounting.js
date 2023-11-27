const countBs = function(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i] === "B"){
            counter += 1;
        }
    }
    return counter;
};

const countChars = function(str, charToCount) {
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i] === charToCount){
            counter += 1;
        }
    }
    return counter;
};

const updatedCountBs = (str) => countChars(str, "B");

console.log(countBs("BBBAAABBB"));
console.log(updatedCountBs("BBBAAABBB"));