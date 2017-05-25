import React from 'react';



const HeroForm = (props) =>{
return (
  <div>
    <form onSubmit={props.handleSubmit}>
      <div className="edit-hero">
        <label>Hero Name</label>
        <input type="text" value={props.name} className="form-control"
        onChange={(event) => props.updateField('name', event.target.value)}/>
      </div>
      <div className="edit-hero">
        <label>Super Power</label>
        <input type="text" value={props.superPowers} className="form-control" />
      </div>
      <div className="edit-hero">
        <label>Universe</label>
        <input type="text" value={props.universe} className="form-control"
        onChange={(event) => props.updateField('universe', event.target.value)} />
      </div>
      <div className="edit-hero">
        <label>Evil?</label>
        <input type="text" value={props.evil} className="form-control"
        onChange={(event) => props.updateField('evil', event.target.value)}/>
      </div>
      <div className="edit-hero">
        <label>Upload Image</label>
        <input type="url" value={props.img} className="form-control"
        onChange={(event) => props.updateField('img', event.target.value)}/>
      </div>
      <div className="col-md-12">
         <div className="row">
           <div className="powerList">{
             props.superPowers.map((power,index) =>
               <h3 key={index}>{power}</h3>
             )
           }
           </div>
           <input type="text" placeholder="Enter super power." onChange={(event) => props.updateField("newPower",event.target.value)}/>
         </div>
         <div className="row">
         <button onClick={(event) => props.updatePowers(event)} className="btn btn-default">Add Power +</button>
         <button onClick={(event) => props.removePower(event)} className="btn btn-default">Remove Power -</button>
         </div>
        </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  </div>
)
}
export default HeroForm;
