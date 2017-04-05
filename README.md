It's nice to set up your .gitignore right now

set up GitHub: create new repository
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/pastrybot/superheroes_crud.git
git push -u origin master

Create README.md, server.js,
Create package.json: type `npm init` on the command line. Answer questions..then VOILA!
`NPM install --save express`//now we have our node modules
require express into our server.js file
then add this ```var app = express();
var server = app.listen(3000, function(){
  console.log('Starting server on port 3000⚡️')
});```
and test our api before comitting via `app.METHOD('URL LOCATION', function(req, res))`
Run your test through postman via your test route

We defined a mongoose schema in the file models/superhero
A schema is like a blueprint, it defines what all future heroes will look like. It will be a constructor funtion we will use to actually make new superheroes.

create DELETE method using remove.
```app.delete('/superheroes/:superhero_id', function(req, res){
  Superhero.remove({_id: req.params.superhero_id}, function(err){
    if(err){
      console.log(err)
    }else{
      res.send('Superhero deleted!')
    }
    ```

Add EJS(npm install --save ejs)
create index.ejs
