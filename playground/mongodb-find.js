// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Successfully connected to MongoDB server.');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bf4dac75b061e79a75b02cd')
    // }).toArray()
    // .then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err);
    // });

    // db.collection('Todos').find().count()
    // .then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err);
    // });

    db.collection('Users').find({
        name: 'Stephen'
    }).count()
    .then((count) => {
        console.log(`Number of users with name Stephen: ${count}`);
    }, (err) => {
        console.log('Unable to retrieve that data.');
    });

    // client.close();
});