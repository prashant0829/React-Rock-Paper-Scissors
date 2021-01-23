import React from "react";



function Item(props) {
  

  return (
    <div className="item">
      <img src={props.image} alt={props.alt} />
      {/* <button onClick={() => handleClick(props.name)}>{props.name}</button> */}
    </div>
  );
}

export default Item;
