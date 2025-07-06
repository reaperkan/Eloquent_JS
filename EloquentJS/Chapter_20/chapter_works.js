const {readFile, writeFile} = require("fs");

writeFile("test.txt", `${Math.random()} was generated at ${Date.now()}`, err => {
    if(err)
        console.log(err);
    else
        console.log("File was written");
})

readFile("test.txt", "utf8", (error,txt) => {
    if(error)
        console.log(error)
    else
        console.log(txt)
})