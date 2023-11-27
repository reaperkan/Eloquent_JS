
const loop = (value, testFunction, updateFunction, bodyFunction) => {
    let currentValue = value;
    while(testFunction(currentValue)){
        bodyFunction(currentValue);
        currentValue = updateFunction(currentValue);
    }
};

loop(3, n => n > 0, n => n - 1, console.log);