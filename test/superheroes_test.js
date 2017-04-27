// var SuperHero = require('../models/superhero');
// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var should = chai.should();
//
// chai.use(chaiHttp);
//
// var server = require('../server');
//
// describe('/GET all heroes', function(){
//
//   it('returns heroes from db', function(done){
//     chai.request(server)
//     .get('/api/superheroes')
//     .end(function(err, res){
//       res.should.have.status(200);
//       res.body.should.have.property('message').eql('Found your heroes')
//       res.body.data.should.be.a('array');
//       done()
//     })
//   })
//
// })
//
// describe('/POST all heroes', function(){
//
//   it('posts a new hero to DB', function(done){
//     var hero = {
//       name: "Pee Pee Boy",
//       superPower: "small bladder",
//       evil: false,
//       rank: 1,
//       img: "http://goldenshower.com"
//     }
//     chai.request(server)
//     .post('/api/superheroes')
//     .send(hero)
//     .end(function(err, res){
//       res.should.have.status(200);
//       res.body.should.have.property('message').eql('Hero Created!');
//       res.body.data.should.have.property('name').eql("Pee Pee Boy");
//       res.body.data.should.have.property('superPowers');
//       done()
//
//     })
//   })
//   it('will not make a new hero without name', function(done){
//     var hero = {
//       superPower: "small bladder",
//       evil: false,
//       rank: 1,
//       img: "http://goldenshower.com"
//     }
//
//     chai.request(server)
//     .post('/api/superheroes')
//     .send(hero)
//     .end(function(err, res){
//       res.body.should.have.property('errors');
//       res.body.errors.name.should.have.property('kind').eql('required');
//       done()
//   });
// });
// })
//
// describe('/GET a single hero', function(){
//   it('should return hero by name', function(done){
//
//     var newSuper = new SuperHero({ name: 'Fred'});
//
//     newSuper.save(function(err, hero){
//       chai.request(server)
//       .get('/api/superheroes/' + hero._id)
//       .send(hero)
//       .end(function(err, res){
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.should.have.property('name');
//         done()
//       })
//     })
//   })
// })
//
// describe('/EDIT a hero', function(){
//   it('I can update a hero', function(done){
//     var hero = new SuperHero({ name: "Aquuaman"});
//     hero.save(function(err, hero){
//       chai.request(server)
//       .put('/api/superheroes/'+ hero._id)
//       .send({ name: "Aquaman" })
//       .end(function(err, res){
//         res.should.have.status(200);
//         res.body.should.have.property('message').eql('hero updated');
//         res.body.hero.should.have.property('name').eql('Aquaman');
//         done();
//       })
//     })
//   })
// })
// describe('DELETE A HERO', function(){
//   it('Can delete a hero by id', function(done){
//     var hero = new Superhero({ name: "Blueman" })
//     hero.save(function(err, hero) {
//       chai.request(server)
//         .delete('/api/superheroes/' + hero._id)
//         .end(function(err, res){
//           res.should.have.status(200);
//           done();
//         })
//     })
//   })
// });
