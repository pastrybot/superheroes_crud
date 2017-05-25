import React from 'react';

//if your wondering about state, you can inspect your console with the React mode,
//and it shows the state and props of objects.
const PostHeroForm = (props) => (
  <div>
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Make A Hero</h3>
      <div className='hero-form'>
        <input onChange={(event) => props.updateName(event)} type="text" placeholder="Enter Hero's Name"/>
        <input onChange={(event) => props.updateUniverse(event)} type="text" placeholder="Universe" />
        <input onChange={(event) => props.updateSuperPower(event)} type="text" placeholder="Super Powers"/>
        <input onChange={(event) => props.updateEvil(event)} type="text" placeholder="Evil?" />
          <input onChange={(event) => props.updateImg(event)} type="url" placeholder="Image Here" />
        </div>
      <button type="submit" className="btn btn-lg btn-success">A Hero Is Born!</button>
    </form>
    </div>

)

export default PostHeroForm;
