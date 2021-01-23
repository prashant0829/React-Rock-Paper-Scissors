import React from "react";

function Computer(props) {
  return (
    <div className="item">
      <img src={props.image} alt={props.alt} />
      <h4>{props.name}</h4>
    </div>
  );
}

export default Computer;
