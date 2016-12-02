var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.json())
app.use(cors())
app.listen(3000, function () {
  console.log('listening on port 3000');
})

var comments = [];
app.get('/comments', function (req, res, next) {
  res.json(comments);
})

app.get('/comments/:id', function(req, res, next) {
  console.log(req.params);
  if (comments[req.params.id]) {
    res.json(comments[req.params.id]);
  }
  else {
      res.status(404).send('Something broke!');
  }
})

app.post('/comments', function (req, res, next) {
  var person = {
    id: comments.length,
    name: req.body.name,
    lastName: req.body.lastName,
    flavor: req.body.flavor

  }
  comments.push(person)
  res.json(comments)
})
