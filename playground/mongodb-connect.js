// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// Object destructuring
// var user = {name: 'Stephen', age: 26};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Successfully connected to MongoDB server.');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: 'false'
    // }, (err, result) => {
    //     if(err) {
    //         console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users collection with name, age, and location properties
    // db.collection('Users').insertOne({
    //     name: 'Thomas',
    //     age: 28,
    //     location: 'Los Angeles'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert into the Users collection', err);
    //     }
    //     // console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});