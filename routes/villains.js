var express = require('express');
var Router = express.Router();
var Villain = require('../models/villains');

Router.route('/')
.get(function(req, res){
  Villain.find(function(err, data){
    if(err){
      console.log('You have an error!');
    }else{
      res.send(data);
    }
  });
});


Router.route('/')
.post(function(req, res){
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

Router.route('/:villain_id')
.get(function(req, res){
  Villain.findById(req.params.villain_id, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.json(data);
    }
  })
});

Router.route('/:villain_id')
.put(function(req, res){
  Villain.findById(req.params.villain_id, function(err, villain){

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

Router.route('/:villain_id')
.delete(function(req, res){
  Villain.remove({_id: req.params.villain_id}, function(err){
    if(err){
      console.log(err)
    }else{
      res.send('You have defeated the villain!')
    }
  });
});

module.exports = Router;
