// Library imports
var express = require('express'),
    bodyParser = require('body-parser'),
    {ObjectID} = require('mongodb');


// Local imports
var {mongoose} = require('../server/db/mongoose'),
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


app.get('/todos', (req, res) => {
    Todo.find()
      .then((todos) => {
        res.send({todos});
      }, (err) => {
        res.status(400).send(err);
      });
});


// GET /todos/:id
// Test ID: 5bfcb588daf66b702b2cdce9
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    // Find by ID
    Todo.findById(id)
      .then((todo) => {
          if(!todo) {
              return res.status(400).send();
          }
          res.send({todo});
      })
      .catch((err) => {
          res.status(400).send();
      });
});



// =======================================================================
app.listen(3000, () => {
    console.log('Constructing additional pylons...');
});


module.exports = {
    app: app
}