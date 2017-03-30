var express = require('express');
var Superhero = require('./models/superhero');
var app = express();

var mongoose = require('mongoose');
//required to connect to our local database.
//uit will look for/create a database called superheroes
//make sure you are running your nodemon and mongod servers!
mongoose.connect("mongodb://localhost/superheroes");
app.get('/test', function(req, res){
  res.send("You found the test route");
})

var superHero1 = {
  name: "Superman",
  superPower: 'I can fly!',
  universe: 'DC',
  evil: false,
  rank:10
};

app.get('/superhero', function(req, res){
  res.json(superHero1);
});
var server = app.listen(3000, function(){
  console.log('Starting server on port 3000⚡️')
});
