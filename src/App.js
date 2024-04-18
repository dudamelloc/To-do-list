import React, { useState } from "react";
import "./App.css";
import Todo from "./componentes/todo";
import Adicao from "./componentes/Adicao";
import Busca from "./componentes/Busca";
import Filter from "./componentes/Filter";


function App() {
  const [todos, setTodos ] = useState([
    {
      id: 1,
      text: "Atualizar o sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a faculdade",
      category: "Pessoal",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Estudar Java",
      category: "Estudo",
      isCompleted: true,
    },
  ]);

  const [busca, setBusca] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort]= useState ("Asc");


  const addTarefa = (text, category) =>{
    const newTarefa = [...todos,
      {
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false,

      },
    ];
    setTodos (newTarefa);
  };

  const removeTarefa = (id) =>{
    const newTarefa = [...todos]
    const filterTarefa = newTarefa.filter(tarefa => tarefa.id !== id ? tarefa : null);

    setTodos (filterTarefa); 
  };

  const completarTarefa = (id) =>{
    const newTarefa =[...todos]
    newTarefa.map((todo)=> todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);

    setTodos(newTarefa);
  };



  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Busca busca={busca} setBusca={setBusca}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <Adicao  addTarefa={addTarefa}/>   {/* função de add tarefa */}
      <div className="todo-list">
        {todos    
        .filter((todo)=> 
          filter === "All" 
          ? true 
          : filter === "Completed"
          ? todo.isCompleted 
          : !todo.isCompleted)

        .filter((todo)=> 
        todo.text.toLowerCase().includes(busca.toLowerCase()))

        .sort((a,b)=> 
          sort === "Asc" 
           ? a.text.localeCompare(b.text)
           : b.text.localeCompare(a.text)
        )

        .map((todo) => (
         <Todo 
         key= {todo.id} 
         todo={todo} 
         removeTarefa={removeTarefa} 
         completarTarefa={completarTarefa}/>
        ))}
      </div>
    </div>
  );
}

export default App;
