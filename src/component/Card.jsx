import React from "react";



function Card(props) {
 

  return (  
    <>
          <div className="card" style={{ width: "23rem" }}>
            <img src={props.obj?.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.obj?.title}</h5>
              <p className="card-text">{props.obj?.description}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
    
    </>
  );
}

export default Card;
