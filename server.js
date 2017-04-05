var express = require('express');
var path = require('path');
var Superhero = require('./models/superhero');
var Villain = require('./models/villains')
var app = express();
var bodyParser = require('body-parser');

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


//return all superheroes
app.get('/api/superheroes', function(req, res){
  Superhero.find(function(err, data){
    if(err){
      console.log('You have an error!');
    }else{
      res.json(data);
    }


  });

});
app.get('/villains', function(req, res){
  Villain.find(function(err, data){
    if(err){
      console.log('You have an error!');
    }else{
      res.send(data);
    }
  });
});

app.post('/superheroes', function(req, res){
  var newSuper = new Superhero({
      name:       req.body.name,
      superPower: req.body.superPower,
      universe:   req.body.universe,
      evil:       req.body.evil,
      rank:       req.body.rank,
  });
  newSuper.save(function(err, sh){
    if(err){
      console.log(err)
    }else{
      res.json(sh)
    }
  });
})

app.post('/villains', function(req, res){
  var newVillain = new Villain ({
      name: req.body.name,
      superPower: req.body.superPower,
      evil: req.body.evil,
      nemesis: req.body.nemesis
  });
  newVillain.save(function(err, v){
    if(err){
      console.log(err)
    }else{
      res.json(v)
    }
  });
});


app.get('/api/superheroes/:superhero_id', function(req, res){
  Superhero.findById(req.params.superhero_id, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.json(data);
    }
  })
});
app.delete('/superheroes/:superhero_id', function(req, res){
  Superhero.remove({_id: req.params.superhero_id}, function(err){
    if(err){
      console.log(err)
    }else{
      res.send('Superhero deleted!')
    }
  })
})

app.get('/villains/:villain_id', function(req, res){
  Villain.findById(req.params.villain_id, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.json(data);
    }
  })
})

app.delete('/villains/:villain_id', function(req, res){
  Villain.remove({_id: req.params.villain_id}, function(err){
    if(err){
      console.log(err)
    }else{
      res.send('You have defeated the villain!')
    }
  });
});


var server = app.listen(3000, function(){
  console.log('Starting server on port 3000⚡️')
});
