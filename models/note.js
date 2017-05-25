//schema used to create new notes for our database
//a representation of something you're modeling
//abstract data-type: not innate to the language, designed to model something, programmer created
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//define the schema
const NoteSchema = new Schema({
  content: {required: true, type: String}
});

//export mongoose model

NoteSchema.methods.loadData = function(data){
  this.content = data.content;
}

//export mongoose model
module.exports = mongoose.model('Note', NoteSchema);
