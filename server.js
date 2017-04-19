var express = require('express');
var path = require('path');
var Superhero = require('./models/superhero');
var Villain = require('./models/villains');
var app = express();
var bodyParser = require('body-parser');
var villainRoutes = require('./routes/villains');
var heroRoutes = require('./routes/superheroes');
var mongoose = require('mongoose');
//required to connect to our local database.
//uit will look for/create a database called superheroes
//make sure you are running your nodemon and mongod servers!
mongoose.connect("mongodb://localhost/superheroes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

//tells express our client side static code , is going to live in the public folder
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/', function(req, res){
  res.render('index')
});
app.get('/heroes', function(req, res){
  res.render('heroes')
});
app.get('/antiHeroes', function(req, res){
  res.render('antiHeroes')
});










app.use('/api/villains', villainRoutes);

app.use('/api/superheroes', heroRoutes);
//use the exported route and use the name you created in the variable when you call in the file

var server = app.listen(3000, function(){
  console.log('Starting server on port 3000⚡️')
});

module.exports = app;
