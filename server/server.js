// Library imports
const express = require('express'),
      bodyParser = require('body-parser'),
      {ObjectID} = require('mongodb'),
      _ = require('lodash');


// Local imports
const {mongoose} = require('../server/db/mongoose'),
      {Todo} = require('../models/Todo'),
      {User} = require('../models/User');

const app = express();

app.use(bodyParser.json());

// =====================================================================
// ROUTES ==============================================================
// =====================================================================
// POST ROUTE
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

// GET ROUTE
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

// DELETE
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id)
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


// UPDATE
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id,
        body = _.pick(req.body, ['text', 'completed']);
    
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
        .then((todo) => {
            if(!todo) {
                return res.status(404).send()
            }
            res.send({todo});
        })
        .catch((err) => {
            res.status(400).send();
        });
});



// =====================================================================
// LISTENING ===========================================================
// =====================================================================
app.listen(3000, () => {
    console.log('Constructing additional pylons...');
});


module.exports = {
    app: app
}