// Library imports
var express = require('express'),
    bodyParser = require('body-parser');


// Local imports
var {mongoose} = require('../db/mongoose'),
    {Todo} = require('../models/Todo'),
    {User} = require('../models/User');

var app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save()
    .then((todo) => {
        res.send(todo);
    }, (err) => {
        console.log('Unable to save new todo.');
        res.status(400).send(err);
    });
});


app.listen(3000, () => {
    console.log('Constructing additional pylons...');
});


module.exports = {
    app: app
}