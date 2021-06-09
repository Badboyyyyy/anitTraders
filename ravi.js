const http = require("http");
const server = http.createServer((res, req) => {
    res.writeHead(200, {"file-content" : "text/html"});
    res.end(impPoints.txt);
});
server.listen(80, "127.0.0.1", () =>{
    console.log("My First Server")
});