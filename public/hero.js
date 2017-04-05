console.log('hello from /public/hero.js')
var sampleVue = new Vue({
  el: "#sample",
  data: {
    numbers: [1,2,3,4,5,6],
    title: "hello from sample",
    heroes: []
  },
});
//get request from our superheroes database
fetch('/api/superheroes')//brings in our get METHOD
.then(function(blob){
  return blob.json();
})
.then(function(data){
  console.table(data);
  sampleVue.heroes=data;
});
