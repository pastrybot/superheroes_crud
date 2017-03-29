var express = require('express');
var app = express();

app.get('/test', function(req, res){
  res.send("You found the test route");
})
var server = app.listen(3000, function(){
  console.log('Starting server on port 3000⚡️')
});
