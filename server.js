var express = require('express');
var path = require('path');
var Superhero = require('./models/superhero');
var Villain = require('./models/villains');
var app = express();
var bodyParser = require('body-parser');

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






app.get('/api/villains', function(req, res){
  Villain.find(function(err, data){
    if(err){
      console.log('You have an error!');
    }else{
      res.send(data);
    }
  });
});



app.post('/api/villains', function(req, res){
  var newVillain = new Villain ();
  newVillain.loadPower(req.body.superPower);
  newVillain.loadData(req.body);
  newVillain.save(function(err, v){
    if(err){
      console.log(err)
    }else{
      res.json(v)
    }
  });
});



app.get('/api/villains/:villain_id', function(req, res){
  Villain.findById(req.params.villain_id, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.json(data);
    }
  })
})
app.put('/api/villains/:villain_id', function(req, res){
  Villain.findById(req.params.villain_id, function(err, villain){

   if(!villain) return res.status(404).send(err, "Can't find villain");


   if(!villain) return res.status(404).send(err, "Can't find villain");
     villain.loadPower(req.body.superPower);
     villain.loadData(req.body);

    villain.save(function(e){
      if(e){
        res.status(500).send(e);
      }else{
        res.json(villain);
      }
    });
  })
})

app.delete('/api/villains/:villain_id', function(req, res){
  Villain.remove({_id: req.params.villain_id}, function(err){
    if(err){
      console.log(err)
    }else{
      res.send('You have defeated the villain!')
    }
  });
});

app.use('/api/superheroes', heroRoutes)
//use the exported route and use the name you created in the variable when you call in the file

var server = app.listen(3000, function(){
  console.log('Starting server on port 3000⚡️')
});
