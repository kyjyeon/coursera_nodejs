const express = require("express");
const http = require('http');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const hostname =  'localhost';
PORT = 'My Port';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req,res,next)=>{
    //no matter what request kind comes(GET, POST, CREATE etc) this will be executed
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/plain');
    next();//it'll continue on to look for additional specifications down below here, which will match this dishes endpoint. So this would be done for all the requests, get, put, post, and delete, on the dishes, and it'll continue on to the next one.  
})

app.get('/dishes', (req,res,next)=>{
    //Because of app.all next(), this will be called.
    res.end('Will send all the dishes to customer');
})

app.post('/dishes',(req,res,next)=>{
    res.end('Will add info to dish: ' + req.body.name + 
    ' with details: '+ req.body.description);
})

app.put('/dishes', (req, res, next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})

app.delete('/dishes', (req, res, next)=>{
    //Dangerous operation so should make operation that only admins can get the access
    res.end('Deleting all the dishes!');
})

app.get('/dishes/:dishID', (req,res,next)=>{
    //Because of app.all next(), this will be called.
    res.end('Will send the details of Selected dish: ' 
    + req.params.dishID);
})

app.post('/dishes/:dishID',(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on: /dishes/'
    + req.params.dishID);
})

app.put('/dishes/:dishID', (req, res, next)=>{
    res.write('Updating the dish ' + req.params.dishID + '\n');
    res.end('Will update the dish: ' + req.body.name
    + ' with detail: ' + req.body.description);
})

app.delete('/dishes/:dishID', (req, res, next)=>{
    //Dangerous operation so should make operation that only admins can get the access
    res.end('Deleting dish: ' + req.params.dishID);
})

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
