import React from "react";

function InputSection({ addCase, InputTextHandler, submitTodoHandler }) {

  return(
    <div className="input__section">
      <input onChange={(e) => InputTextHandler(e)} type="text" placeholder="Case name" className="case__name"/>
      <button onClick={(e) => submitTodoHandler(e)} type="submit" className="add__case">ADD</button>
    </div>
  )
}

export default InputSection;