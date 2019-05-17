const express = require("express");
const http = require('http');

const hostname =  'localhost';
PORT = 3000;

const app = express();

app.use((req, res, next)=> {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(PORT, hostname, ()=>{
    console.log(`Sever running at http://${hostname}:${PORT}`);
})