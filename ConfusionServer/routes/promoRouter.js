const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Context-Type', 'text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send all infos about the promotions');
})

.post((req,res,next)=>{
    res.end('Adding new promotion: ' + req.body.promoid
    + '\nnew promotion description: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("Cannot PUT to update something");
})
.delete((req,res,next)=>{
    res.end('Deleting all the promotion infos');
});


promoRouter.route('/:promoid')

.get((req,res,next)=>{
    res.end('Bringing ID of promotion: ' + req.body.promoid);
})
.put((req,res,next)=>{
    res.end('Updating the existing promotion: ' + req.params.promoid +
    '\nNew description: ' + req.body.description);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('Cannot post something to an already existing ID: ' + req.params.promoid);
})
.delete((req,res,next)=>{
    res.end('Deleting the promo:' + req.params.promoid);
});

module.exports = promoRouter;