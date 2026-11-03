import React, { useState } from "react";
import "./TodoList.css";
import InputContainer from "./InputContainer";
import TodoContainer from "./TodoContainer";

function TodoList() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  const WriteTodo = (e) => {
    setInputVal(e.target.value);
  };

  const AddTodo = () => {
    if (inputVal.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  };

  const DeleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>Todo List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={WriteTodo}
        addTodo={AddTodo}
      />
      <TodoContainer todos={todos} delTodo={DeleteTodo} />
      
      <button className="clear" onClick={()=> setTodos([])}>Clear All</button>
    </main>
  );
}

export default TodoList;
