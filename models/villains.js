var mongoose = require('mongoose');

var VillainSchema = new mongoose.Schema({
    //schema = blueprint
    name: String,
    superPower: String,
    universe: String,
    evil: Boolean,
    rank: Number,
    img: String
});

module.exports = mongoose.model('Villain', VillainSchema);
