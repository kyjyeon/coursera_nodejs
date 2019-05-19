const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboperation = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname =  'conFusion';

MongoClient.connect(url, (err, client)=>{
    
    assert.equal(err, null);
    console.log('Connected correctly to server');

    const db= client.db(dbname);
    
    dboperation.insertDocument(db, {name: "YJ", description: "test"}, 'dishes', (result)=>{
        console.log("Insert Document:\n", result.ops);

        dboperation.findDocuments(db, 'dishes', (docs)=>{
            console.log('Found Docs:\n ' + docs);

            dboperation.updateDocuments(db, {name: 'YJ'}, {description: "Updated"}, 'dishes', (result)=>{
                console.log('Updated docs...:\n' + result.result);

                dboperation.findDocuments(db, 'dishes', (docs)=>{
                    console.log("Found Documents:\n", docs);

                    db.dropCollection('dishes', (result)=>{
                        console.log('Droped Collections: \n',result);
                    })
                })
            })
        })
    }) 
})