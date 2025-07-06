const {createServer,request} = require("http");

let requestStream = request({
    hostname: 'eloquentjavascript.net',
    path: '/20_node.html',
    method: 'GET',
    headers: {accept: 'text/html'}
}, response => {
    console.log("Server responded with status code", response.statusCode);
});

requestStream.end();

// let server = createServer((request, response) => {
//     response.writeHead(200, {
//         "content-type": "text/html"
//     });

//     response.write(`
//         <h1>Hello</h1>
//         <p>You asked for <code>${request.url}</code></p>
//     `);

//     response.end();
// });

// server.listen(8000);
// console.log("Listening");

let server = createServer((request, response) => {
    response.writeHead(200, {
        "content-type": "text/plain"
    });

    request.on('data', chunk => {
        console.log(chunk.toString())
        return response.write(chunk.toString().toUpperCase());
    });

    request.on("end", () => response.end());
});

server.listen(8000);
console.log("Listening");