const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose'),
      {Todo} = require('../models/Todo'),
      {User} = require('../models/User');

    //   5bfe135fa8c4495c20f55bb2
var id = '5bfe135fa8c4495c20f55bb2';

// if(!ObjectID.isValid(id)) {
//     console.log('ID is NOT valid!');
// } else {
//     console.log('ID valid!')
// };

// // Find will return everything, but you can pass in an ID parameter
// Todo.find({
//     _id: id
// })
// .then((todos) => {
//     console.log('Todos find', todos);
// });

// // Find one result
// Todo.findOne({
//     _id: id
// })
// .then((todo) => {
//     console.log('Todo findOne', todo);
// });

// Return one result by its ID
// Todo.findById(id)
// .then((todo) => {
//     if(!todo) {
//         return console.log('ID not found!');
//     }
//     console.log('Todo findById', todo);
// })
// .catch((err) => console.log(err));

// Finding user by ID
// 5bfcb6fe5eec53943721fc03
var userId = '5bfcb6fe5eec53943721fc03';

User.findById(userId)
.then((user) => {
    if(!user) {
        return console.log('User was not found!');
    }
    console.log(JSON.stringify(user, undefined, 2));
})
.catch((err) => console.log(err));