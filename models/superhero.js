var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({
    //schema = blueprint
    name: { required: true, type: String },
    superPowers: [{default: [], type: String}],
    universe: String,
    evil: Boolean,
    rank: Number,
    img: String,
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }]
    //brackets denote that we're starting reference to something
    //array is a an array of note model ids
    //setting type to be mongoose object ID
    //then next argument sets up what it's referencing i.e. what we called
    //it in the export in the model the data-type name
});

SuperheroSchema.methods.loadData = function(data){
  this.name       = data.name ? data.name : this.name;
  this.superPowers= data.superPowers ? data.superPowers : this.superPowers;
  this.universe   = data.universe ? data.universe : this.universe;
  this.evil       = data.evil ? data.evil : this.evil;
  this.rank       = data.rank ? data.rank : this.rank;
  this.img        = data.img ? data.img : this.img;

}
SuperheroSchema.methods.loadPower = function(powerN){

  this.superPowers.push(powerN);
}

module.exports = mongoose.model('Superhero', SuperheroSchema);
