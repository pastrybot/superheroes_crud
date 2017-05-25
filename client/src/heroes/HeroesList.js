import React from 'react';
import {Link} from 'react-router';
import NotesList from './NotesList';

const HeroesList = (props) => {
 return (
<div>
   <h1 className="title">HEROES!</h1>
      <div className="hero-flex">

        { props.heroes.map((item, index) => {
            return (
            <div className='hero-panel'>
               <h2 className='hero-name'>{ item.name }</h2>
                <ul className='hero-text'>
                  <li>{ item.superPower }</li>
                  <li>{ item.universe }</li>
                  <li><img key={ index } src={ item.img } alt="hero"/></li>
                </ul>
                <div>
                  <label> Add Note </label>
                  <input required="true" type="text" value={props.text || ""} onChange={(event) => props.updateText(event)} placeholder="Type notes here"/>
                  <button className="btn btn-success" type="button" onClick={(event) => props.submitNote(event, item._id)}>Submit Note</button>
                </div>
                <div>
                  <NotesList notes={item.notes}/>
                </div>
                <div>
                <Link className="btn btn-warning" to={`/heroes/edit/${item._id}`}>Edit</Link>
                </div>
            </div>
            )
          }
        )}

      </div>
      </div>

    )
  }
export default HeroesList;
