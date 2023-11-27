
for(let i = 1; i <= 100; i++){
    const divisibleBy3 = i % 3 === 0;
    const divisibleBy5 = i % 5 === 0;

    if(divisibleBy3){
        if(divisibleBy5){
            console.log("FizzBuzz");
        }else {
            console.log("Fizz");
        }
    }else if(divisibleBy5){
        console.log("Buzz");
    }
}

// Solution

for (let n = 1; n < 100; n++){
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}