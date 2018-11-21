// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Successfully connected to MongoDB server.');
    const db = client.db('TodoApp');

    // deleteMany - Multiple documents
    // db.collection('Todos').deleteMany({
    //     text: 'Eat Dinner'
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    // deleteOne - delete one document
    // db.collection('Todos').deleteOne({
    //     text: 'Eat Dinner'
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete - delete specific document
    // db.collection('Todos').findOneAndDelete({
    //     text: 'Eat Dinner'
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({
        name: 'Stephen'
    })
    .then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID(123);
    })
    .then((result) => {
        console.log(result);
    });

    // client.close();
});