import React, { Component } from 'react';
import EditHeroForm from './EditHeroForm';
import $ from 'jquery';
import { browserHistory } from 'react-router';


class EditHeroContainer extends Component{
  state= {
    isFetching: true,
    name: undefined,
    superPowers: undefined,
    universe: undefined,
    evil: undefined,
    img: undefined,
    newPower: undefined
}

  updateField = this.updateField.bind(this);
  handleSubmit = this.handleSubmit.bind(this)//keeping track of context, binding "this" keyword to handleSubmit so we can pass it down the tree
  componentDidMount= () => this.loadHeroes()

  handleSubmit(event){
    event.preventDefault()
    const data = {
      name: this.state.name,
      universe: this.state.universe,
      img: this.state.img,
      evil: this.state.evil
    }
  $.ajax({
    url:`/api/superheroes/${this.props.params.heroId}`,
    method: 'PUT',
    data: data
  }).done(response =>{
    console.log(response);
  })


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




  updateField(fieldName, fieldValue){
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }



   loadHeroes(){
     $.ajax({
       url: `/api/superheroes/${this.props.params.heroId}`,
       method: 'GET'
     }).done(data => {
       this.setState({ name: data.name,
                       superPowers: data.superPowers,
                       universe: data.universe,
                       evil: data.evil,
                       img: data.img,
                       isFetching: false,
                      })
       console.log(data.name, "hero name");

     })

   }

   updatePowers(event){
     event.preventDefault();
     const tempArray = [];
     tempArray.push(this.state.newPower);
     this.setState({ superPowers: tempArray });
     this.setState({ newPower: ''});
     console.log(this.state.superPowers);
   }

   removePower(event){
     event.preventDefault();
     let tempArray = this.state.superPowers;
     tempArray = tempArray.length > 0 ? tempArray.splice(-1) : tempArray;
     console.log('tempArray', tempArray)
     this.setState({ superpowers: tempArray })
     console.log(this.state.superPowers);

   }

  render(){
    return(
      <div>
        <h3>{ this.props.params.heroId }</h3>
        { !this.state.isFetching ?
        <EditHeroForm
            handleSubmit={this.handleSubmit}
            updateField={this.updateField}
            name={this.state.name}
            superPowers={this.state.superPowers}
            universe={this.state.universe}
            evil={this.state.evil}
            img={this.state.img}
            updatePowers={(event) => this.updatePowers(event)}
            removePowers={(event) => this.removePowers(event)}
        /> : <h3>still thinking...</h3>
      }
      </div>
  )}
}
export default EditHeroContainer;
//use id to get info from server
