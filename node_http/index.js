const http = require("http");

const host = "localhost";
const PORT = 3000;

const server = http.createServer((req,res) =>{
    console.log(req.headers);
    
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/html');
    res.end("<html><body><h1>Homepage Activated!</h1></body></html>");
})

server.listen(PORT, host, () => {
    console.log(`Sever running at http://${host}:${PORT}`);
})