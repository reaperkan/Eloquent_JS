
for(let i = 0; i < 7; i++){
    console.log(`${"#".repeat(i+1)}`);
}

// Solution

for (let i = "#"; i.length < 8; i += "#"){
    console.log(i);
}