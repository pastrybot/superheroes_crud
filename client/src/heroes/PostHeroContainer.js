import React, { Component } from 'react';
import PostHeroForm from './PostHeroForm';
import $ from 'jquery';


class PostHeroContainer extends Component {//keeps track of our state, and will render the PostHeroForm
  //define state object
  state={
    name: undefined,
    universe: undefined
  }
  handleSubmit = this.handleSubmit.bind(this)//keeping track of context, binding "this" keyword to handleSubmit so we can pass it down the tree

  handleSubmit(event){
    event.preventDefault()
    console.log(
      this.state.name, this.state.universe, "name and universe in the state object"
    )

    const hero = {name:this.state.name, universe:this.state.universe}

    $.ajax({
      url:"/api/superheroes",
      method:'POST',
      data: hero
    }).done((response) => console.log(response))//whatever we get back from our server after posting something
  }
//using the arrow function automatically binds this to updateName
  updateName = (event) => this.setState({name:event.target.value})
  updateUniverse = (event) => this.setState({universe:event.target.value})

  render(){
    return(
      <div>
    {/*  //how we pass down our functions as props */}
     <h1>Post a hero!! </h1>
        <PostHeroForm
          handleSubmit={this.handleSubmit}
          updateName={this.updateName}
          updateUniverse={this.updateUniverse}
        />

      </div>
    )
  }
}
export default PostHeroContainer;
