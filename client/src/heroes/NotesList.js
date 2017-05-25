import React from 'react';

const NotesList = (props) => {
  return (
    <div>
      <div>
        <h4 className="comment-head">Comments</h4>
        { props.notes.map((item, index)=> {
          return (
            <div key={index} className="note-list">
              <p>{item.content}</p>
            </div>
          )
        }
      )}
      </div>

  </div>
)
}
export default NotesList;
