
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import ContactMain from "./MyComponents/ContactMain";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
  
    // Pehle todos ko filter karo taki deleted todo list se hat jaye
    const newTodos = todos.filter((e) => {
      return e !== todo;
    });
  
    // Ab baqi todos ke sno ko update karo
    const updatedTodos = updateSno(newTodos);
    setTodos(updatedTodos);
  
    // Updated todos ko local storage mein save karo
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  
  const updateSno = (todos) => {
    return todos.map((todo, index) => {
      return { ...todo, sno: index + 1 }; // Har todo ka naya sno set karo
    });
  };
  
  
  
  
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  return (

    <>
      <Router>
        <Header title="" searchBar={false} />
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route exact path="/about" element={<ContactMain />} />
        </Routes>
        <Footer />
      </Router>
    </>
   
  );
}

export default App;

