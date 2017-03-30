var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({
    //schema = blueprint
    name: String,
    superPower: String,
    universe: String,
    evil: Boolean,
    rank: Number
});

module.exports = mongoose.model('Superhero', SuperheroSchema);
