//our smoke test to try out our Vue
console.log('hello from /public/hero.js')
var componentVue = new Vue({
  el: "#component",
  data: {
    numbers: [1,2,3,4,5,6],
    title: "hello from sample",
    heroes: [],
    hero: {}
  },
});
// get request from our superheroes database
// makes a get request for our data from our API endpoint
// similar to $.ajax
fetch('/api/superheroes')//brings in our get METHOD
.then(function(blob){
  return blob.json();
})
.then(function(data){
  console.table(data);
  componentVue.heroes= data;
  componentVue.hero= data[4];
});
