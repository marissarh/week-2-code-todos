import PropTypes from "prop-types";

const TodoListItems = ({ todos, setTodos }) => {
  const handleToDoFinished = (index) => {
    
    const arrOne = todos.slice(0, index);
    const arrTwo = todos.slice(index+ 1);
    
    setTodos([...arrOne, ...arrTwo])
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return <li key={`todo-${index}`}>
            {todo} <button onClick={() => handleToDoFinished(index)}>Done</button>
            </li>;
        })}
      </ul>
    </div>
  );
};

TodoListItems.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTodos: PropTypes.func
};

export default TodoListItems;
