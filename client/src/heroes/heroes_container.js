import React, { Component } from 'react';
import $ from 'jquery';
import HeroesList from './HeroesList';
//stateless function that displays a list of heroes

class HeroesContainer extends Component {

  state = {
    heroes: undefined,
    villains: undefined
  }

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
  render() {
    return (
      <div className="">

        { this.state.heroes ?
          <HeroesList heroes={this.state.heroes}/>
          : <h5>loading...</h5>
        }

      </div>
    );
  }

}


export default HeroesContainer;
