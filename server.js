var express = require('express');
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


//return all superheroes
app.get('/superheroes', function(req, res){
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


app.get('/superheroes/:superhero_id', function(req, res){
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
