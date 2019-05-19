const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Context-Type', 'text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send all infos about the leaders');
})

.post((req,res,next)=>{
    res.end('Adding a new leader: ' + req.body.leaderid
    + '\nnew leader description: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("Cannot PUT to update something");
})
.delete((req,res,next)=>{
    res.end('Deleting all the leaders infos');
});


leaderRouter.route('/:leaderid')

.get((req,res,next)=>{
    res.end('Bringing ID of a leader: ' + req.body.leaderid);
})
.put((req,res,next)=>{
    res.end('Updating the existing leader: ' + req.params.leaderid +
    '\nNew description: ' + req.params.description);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('Cannot post something to an already existing ID: ' + req.params.leaderid);
})
.delete((req,res,next)=>{
    res.end('Deleting the leader:' + req.params.leaderid);
});

module.exports = leaderRouter;