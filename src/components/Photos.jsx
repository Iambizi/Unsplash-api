import React from "react";
import { Link } from "react-router-dom";

const Photos = (props) => {
  return ( 
  <React.Fragment >
    <h1>{props.keywords}</h1>
    <div className="container">
      <div className="photo-grid">
        {props.results.map((results)=>{
            return (
                <img key={results.id} className="photo" src={results.urls.small} alt={results.alt_description} />
            );
        })}
      </div>
    </div>
  </React.Fragment> 
  );
}
 
export default Photos;