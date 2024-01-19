import { useState } from "react";
import "./App.css";
import TodoListItems from "./TodoListItems";

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
      <h1>Todos</h1>
      <form onSubmit={addItem}>
        <label htmlFor="todo-input">Todo: </label>
        <input
          id="todo-input"
          type="text"
          onChange={(event) => setItemToAdd(event.target.value)}
          value={itemToAdd}
        />
        <button type="submit">Add Todo</button>
      </form>
      <TodoListItems todos={todos} />
    </>
  );
}

export default App;
