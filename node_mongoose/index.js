const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then(()=>{
    console.log("Connected to the mongodb database server...");

    Dishes.create({
        name: 'Chicken',
        description: "Fried Chicken"
    })
        .then((dish)=>{
            console.log("This is after creating a dish" + dish);
            return Dishes.findByIdAndUpdate(dish._id,{
                $set: {description: "Updated test"}},
                {
                //once the update of the dish is complete,
                // this will return updated dish back to us
                    new: true
                }).exec();
        })
        .then((dish)=>{
            console.log(
            + dish);
            dish.comments.push({
                rating: 4,
                comment: "Not perfect, but enjoyed",
                author: 'Toby'
            });
            return dish.save();
            })
        .then((dish)=>{
            console.log("This is info after saving comments"
             + dish);
            return Dishes.remove({});
        })
        .then(()=>{
            return mongoose.connection.close();
        })
        .catch((err)=>{
            console.log("Error catching activated " + err);
        });
});