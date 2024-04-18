import React from 'react'

const Todo = ({todo, removeTarefa, completarTarefa}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "underline dotted" : ""}}>
        <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
        </div>
        <div>
            <button className="complete" onClick={()=> completarTarefa(todo.id)}>Completar tarefa</button>
            <button className="remove" onClick={()=> removeTarefa(todo.id)}>Deletar tarefa</button>  
        </div>
    </div>
  );
};

export default Todo






