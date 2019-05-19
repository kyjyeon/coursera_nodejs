//will encapsulate all that database operations
const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) =>{
    const coll = db.collection(collection);
    coll.insert(document, (err, result)=>{
        assert.equal(err, null);
        console.log('Inserting: '+ result.result.n + 
        " documents into the collection");
        callback(result);
    })
};

exports.findDocuments = (db, collection, callback)=>{
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs)=>{
        assert.equal(err, null);
        callback(docs);
    })
}

exports.removeDocuments = (db, document , collection, callback)=>{
    const coll = db.collection(collection);
    coll.deleteone(document, (err,result)=>{
        assert.equal(err, null);
        console.log("Removed the document ", document);
        callback(result);
    });
}

exports.updateDocuments = (db, document , update ,collection, callback)=>{
    const coll = db.collection(collection);
    coll.updateOne(document, {$set: update}, null, (err, result)=>{
        assert.equal(err, null);
        console.log("Updated the document: ", update);
        callback(result);
    })

}