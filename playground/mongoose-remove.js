const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose'),
      {Todo} = require('../models/Todo'),
      {User} = require('../models/User');

// Deleting records
// To remove everything
// Todo.remove({})
// .then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({
//     _id: 'id_here'
// })
// .then((todo) => {
//     do something here
// });
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5c00b87a02ff6586f3ed80db')
.then((todo) => {
    console.log(todo);
});