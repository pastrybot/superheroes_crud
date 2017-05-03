import React from 'react';
const HeroesList = (props) => {
 return (
      <div className="hero-list">
      <h1>HEROES!</h1>

          { props.heroes.map((item, index) => {
            return (
            <div className='container'>
               <h2>{ item.name }</h2>
                <ul>
                  <li>{ item.superPower }</li>
                  <li>{ item.universe }</li>
                  <li><img key={ index } src={ item.img }/></li>
                </ul>
            </div>
            )
          }
        )}

      </div>
    )
  }
export default HeroesList;
