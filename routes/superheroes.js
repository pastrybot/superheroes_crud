var express = require('express');
var Router = express.Router();
var Superhero = require('../models/superhero');
var async = require('async');



Router.route('/')
  .get(function(req, res) {
    Superhero.find(function(err, data) {
      if (err) {
        res.send(err)
      } else {
        res.json({
          message: 'Found your heroes',
          data
        });
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
Router.route('/multiple-superHeroes')
  .post(function(req, res) {
      var newHeroes = [];
      console.log(req.body.data, "REQUEST BODY DATA");
      // will make it possible to post many superheroes at once
      async.each(req.body.data, function(hero, cb) {
          var newSuper = new Superhero();
          newSuper.loadPower(hero.superPower);
          newSuper.loadData(hero);
          newSuper.save()
            .then(function(hero) {
              console.log(hero, 'Each Hero Success');
              newHeroes.push(hero);
              cb();
            },
            function(err) {
              if (err) cb(err);
            });
        },
        function(err) {
          if (err) throw err;
          res.json(newHeroes);

      });
  });

Router.route('/:superhero_id')
  .get(function(req, res) {
    Superhero.findById(req.params.superhero_id, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    })
  });

Router.route('/:superhero_id')
  .put(function(req, res) {
    Superhero.findById(req.params.superhero_id, function(err, hero) {

      if (!hero) return res.status(404).send(err, "Can't find superhero");
      hero.loadPower(req.body.superPower);
      hero.loadData(req.body);
      hero.save(function(err) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json({
            hero,
            message: 'hero updated'
          });
        }
      });
    })
  })

Router.route('/:superhero_id')
  .delete(function(req, res) {
    Superhero.remove({
      _id: req.params.superhero_id
    }, function(err) {
      if (err) {
        console.log(err)
      } else {
        res.send('Superhero deleted!')
      }
    })
  })


module.exports = Router;
