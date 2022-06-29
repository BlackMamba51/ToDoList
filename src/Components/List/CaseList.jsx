import React from "react";
import Item from "./Item";

function CaseList({ caseList, deleteHandler }) {

  return(
    <div className="case__list">
      {caseList.map((item, index) => <Item item={item} key={index} deleteHandler={deleteHandler}/>)}
    </div>
  )
}

export default CaseList;