import React from "react";
import { useState } from "react";
import CaseList from "./CaseList";
import InputSection from "./InputSection";
import './list.css';
function ToDoContainer() {
  const [caseList, setCaseList] = useState([]);
  const [InputText, setInputText] = useState('');

  function InputTextHandler(event) {
    setInputText(event.target.value);
  }
  
  function submitTodoHandler(event) {
    event.preventDefault();
    setCaseList([
      ...caseList,
      {title: InputText, id: Date.now()}
    ]);
  }
  function deleteHandler(item) {
    setCaseList(caseList.filter(post => post.id !== item.id))
  }

  return (
    <div className="todo__container">
      <InputSection submitTodoHandler={submitTodoHandler} InputTextHandler={InputTextHandler}/>
      <CaseList deleteHandler={deleteHandler} caseList={caseList}/>
    </div>
  )
}

export default ToDoContainer;