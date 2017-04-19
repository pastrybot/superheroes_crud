//our smoke test to try out our Vue
console.log('hello from /public/hero.js')
var componentVue = new Vue({
  el: "#component",
  data: {
    numbers: [1,2,3,4,5,6],
    title: "hello from sample",
    heroes: [],
    hero: {},
    newName: ""
  },
  methods: {
    deleteHero: function(id){
      if(confirm("Are you sure you want to destroy your nemesis?")){
        $.ajax({
          url:"/api/superheroes/"+ id,
          method: 'DELETE'
        }).done(function(data){
          window.location = '/heroes'
        })
      }
    },
    submitHero: function(e){
      e.preventDefault()
      var data = {
        name: this.newName,
        superPowers: this.newSuperPower,
        universe: this.newUniverse,
        rank: this.newRank,
        img: this.newImg
      }
      $.ajax({
        url:'/api/superheroes/',
        method: 'POST',
        data: data
      }).done(function(res){
        console.log(res);
      })
    }
  }
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
  componentVue.heroes= data.data;
  componentVue.hero= data[4];
});
