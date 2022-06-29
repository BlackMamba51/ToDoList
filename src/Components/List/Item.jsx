import React from "react";

function Item({ item, deleteHandler }) {

  return(
    <div className="case__item">
      <div className="case__title">{item.title}</div>
      <button onClick={() => deleteHandler(item)} id={item.id} className="button__delete">DELETE</button>
    </div>
  )
}

export default Item;