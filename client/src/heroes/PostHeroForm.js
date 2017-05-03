import React from 'react';

//if your wondering about state, you can inspect your console with the React mode,
//and it shows the state and props of objects.
const PostHeroForm = (props) => (
  <div>
    <form onSubmit={(event) => props.handleSubmit(event)}>
      <h3>Post New Hero</h3>
      <input onChange={(event) => props.updateName(event)}
        type="text" placeholder="Enter Hero's Name" />
      <input onChange={(event) => props.updateUniverse(event)}
      type="text" placeholder="Universe"/>
      <button type="submit">Create </button>
    </form>
    </div>

)

export default PostHeroForm;
