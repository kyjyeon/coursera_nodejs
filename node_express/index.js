const express = require("express");
const http = require('http');
const morgan = require('morgan');
const hostname =  'localhost';
PORT = 3000;

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname+ '/public'))

app.use((req, res, next)=> {
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(PORT, hostname, ()=>{
    console.log(`Sever running at http://${hostname}:${PORT}`);
})
