var express = require('express');
var Router = express.Router();
var Superhero = require('../models/superhero')



Router.route('/')
  .get(function(req, res){
    Superhero.find(function(err, data){
      if(err){
        console.log('You have an error!');
      }else{
        res.json(data);
      }
    });
});

Router.route('/')
  .post(function(req, res){
    var newSuper = new Superhero();
    newSuper.loadPower(req.body.superPower);
    newSuper.loadData(req.body);
    newSuper.save(function(err, sh){
      if(err){
        console.log(err)
      }else{
        res.json(sh)
      }
    });

});

Router.route('/:superhero_id')
.get(function(req, res){
  Superhero.findById(req.params.superhero_id, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.json(data);
    }
  })
});

Router.route('/:superhero_id')
.put(function(req, res){
  Superhero.findById(req.params.superhero_id, function(err, hero){

  if(!hero) return res.status(404).send(err, "Can't find superhero");
    hero.loadPower(req.body.superPower);
    hero.loadData(req.body);
    hero.save(function(e){
      if(e){
        res.status(500).send(e);
      }else{
        res.json(hero);
      }
    });
  })
})

Router.route('/:superhero_id')
.delete(function(req, res){
  Superhero.remove({_id: req.params.superhero_id}, function(err){
    if(err){
      console.log(err)
    }else{
      res.send('Superhero deleted!')
    }
  })
})


module.exports = Router;
