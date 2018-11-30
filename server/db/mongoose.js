var mongoose = require('mongoose');

// Set up mongoose to use promises
mongoose.Promise = global.Promise;
// Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};