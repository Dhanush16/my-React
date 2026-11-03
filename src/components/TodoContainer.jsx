import React from 'react'
import Todo from './Todo'

function TodoContainer({todos, delTodo}) {
  return (
    <div className="todo-item">
        {todos.map((todo, index) => {
            return <Todo todo={todo} onDelete={() => delTodo(index)} />;
        })}
      </div>
  )
}

export default TodoContainer