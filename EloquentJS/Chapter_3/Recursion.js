
const isEven = function (a) {
    if (a == 0){
        return true;
    }else if (a == 1){
        return false;
    }
    else if (a < 0){
        return isEven(a * -1);
    }
    // Solution adds else block 
    return isEven(a-2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));