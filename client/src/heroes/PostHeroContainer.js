import React, { Component } from 'react';
import PostHeroForm from './PostHeroForm';
import $ from 'jquery';
import { browserHistory } from "react-router";

class PostHeroContainer extends Component {//keeps track of our state, and will render the PostHeroForm
  //define state object
  state={
    name: undefined,
    universe: undefined,
    superPowers: undefined,
    img: undefined,
    evil: undefined
  }
  handleSubmit = this.handleSubmit.bind(this)//keeping track of context, binding "this" keyword to handleSubmit so we can pass it down the tree

  handleSubmit(event){
    event.preventDefault()
    alert('function triggered')
    console.log(
      this.state.name, this.state.universe, "name and universe in the state object"
    )

    const hero = {
      name:this.state.name,
      universe:this.state.universe,
      superPowers:this.state.superPowers,
      img:this.state.img,
      evil:this.state.evil
    }

    $.ajax({
      url:"/api/superheroes",
      method:'POST',
      data: hero
    }).done((response) => {
      console.log(response)
      browserHistory.push('/heroes')
    })
    //whatever we get back from our server after posting something
  }
//using the arrow function automatically binds this to updateName(or Universe, superPower etc.)
  updateName = (event) => this.setState({name:event.target.value})
  updateUniverse = (event) => this.setState({universe:event.target.value})
  updateSuperPower = (event) => this.setState({superPowers:event.target.value})
  updateEvil = (event) => this.setState({evil:event.target.value})
  updateImg = (event) => this.setState({img:event.target.value})

  render(){
    return(
      <div>
    {/*  //how we pass down our functions as props */}
     <h1 className="title">New Hero!</h1>
        <PostHeroForm
          handleSubmit={this.handleSubmit}
          updateName={this.updateName}
          updateUniverse={this.updateUniverse}
          updateSuperPower={this.updateSuperPower}
          updateEvil={this.updateEvil}
          updateImg={this.updateImg}
        />

      </div>
    )
  }
}
export default PostHeroContainer;
