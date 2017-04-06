var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({
    //schema = blueprint
    name: String,
    alias: String,
    superPower: String,
    universe: String,
    evil: Boolean,
    rank: Number,
    img: String
});

module.exports = mongoose.model('Superhero', SuperheroSchema);
