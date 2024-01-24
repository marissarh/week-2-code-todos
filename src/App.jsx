import { useState } from "react";
import "./App.css";
import TodoListItems from "./TodoListItems";
import TodoForm from "./TodoForm";

function App() {
  const [itemToAdd, setItemToAdd] = useState("");
  const [todos, setTodos] = useState([
    "wash dishes",
    "mop floor",
    "teach class",
    "cook food",
    "tune guitar",
  ]);

  const addItem = (event) => {
    event.preventDefault();

    if (itemToAdd === "") {
      window.alert("You must type in a value");
      return;
    }

    setTodos([...todos, itemToAdd]);
    setItemToAdd("");
  };

  return (
    <>
      <TodoForm addItem={addItem} itemToAdd={itemToAdd} setItemToAdd={setItemToAdd} setTodos={setTodos} />
      <TodoListItems todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
