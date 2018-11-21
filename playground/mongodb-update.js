// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Successfully connected to MongoDB server.');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5bf4dac75b061e79a75b02cd")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5bf4eb635b061e79a75b06cf")
    }, {
        $set: {
            name: 'Joseph'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    })
    .then((result) => {
        console.log(result);
    });

    // client.close();
});