//Contains implementation of handling REST API endpoint
// ex(/dishes,  /dishes/:dishID)
const express = require("express");
const bodyParser = require('body-parser');

//this will declare dishRouter as an Express router that can handle that dishRouter related code here.
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
/*
using this approach, we are declaring the endpoint at one single location. 
Whereby you can chain all get, PUT, POST, delete methods already do this dish router
*/
dishRouter.route('/')
// make it all chained -> no semi-colon, end has semi-colon
.all((req,res,next)=>{
    //no matter what request kind comes(GET, POST, CREATE etc) this will be executed
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/plain');
    next();//it'll continue on to look for additional specifications down below here, which will match this dishes endpoint. So this would be done for all the requests, get, put, post, and delete, on the dishes, and it'll continue on to the next one.  
})

.get((req,res,next)=>{
    //Because of app.all next(), this will be called.
    res.end('Will send all the dishes to customer');
})

.post((req,res,next)=>{
    res.end('Will add info to dish: ' + req.body.name + 
    ' with details: '+ req.body.description);
})

.put((req, res, next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})

.delete((req, res, next)=>{
    //Dangerous operation so should make operation that only admins can get the access
    res.end('Deleting all the dishes!');
});


dishRouter.route('/:dishID')

.get((req,res,next)=>{
    //Because of app.all next(), this will be called.
    res.end('Will send the details of Selected dish: ' 
    + req.params.dishID);
})

.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on: /dishes/'
    + req.params.dishID);
})

.put((req, res, next)=>{
    res.write('Updating the dish ' + req.params.dishID + '\n');
    res.end('Will update the dish: ' + req.body.name
    + ' with detail: ' + req.body.description);
})

.delete((req, res, next)=>{
    //Dangerous operation so should make operation that only admins can get the access
    res.end('Deleting dish: ' + req.params.dishID);
});

module.exports = dishRouter;