import React, { Component } from 'react';
import $ from 'jquery';
import HeroesList from './HeroesList';

//stateless function that displays a list of heroes

class HeroesContainer extends Component {

  state = {
    heroes: undefined,
    villains: undefined,
    text: undefined
  }

 loadHeroes = this.loadHeroes.bind(this)
 submitNote = this.submitNote.bind(this)
 componentDidMount= () => this.loadHeroes()

  loadHeroes(){
    $.ajax({
      url: '/api/superheroes',
      method: 'GET'
    }).done((response) => {
      console.log(response, "I am data");
      this.setState({ heroes: response.data })
    })
  }

  updateText = (event) => this.setState({ text: event.target.value })



  submitNote(event, _id){
    event.preventDefault();
    if(!this.state.text || this.state.text.length < 1){
      alert("Please fill out the required field")
    return
    }
    let note = {content: this.state.text}
    $.ajax({
      url: `/api/superheroes/note/${_id}`,
      method: 'POST',
      data: note
    }).done((response) => {
      this.setState({text: ""})
      this.loadHeroes()
    }
  )
};

    //any time we change text, it will auto-bind, and auto-update with the event-handler

  render() {
    return (
      <div className="">

        { this.state.heroes ?
          <HeroesList heroes={this.state.heroes}
                      updateText={this.updateText}
                      submitNote={this.submitNote}
                      text={this.state.text}
                      />
          : <h5>loading...</h5>
        }

      </div>
    );
  }

}


export default HeroesContainer;
