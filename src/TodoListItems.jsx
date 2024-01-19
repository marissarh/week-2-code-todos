import PropTypes from "prop-types";

const TodoListItems = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return <li key={`todo-${index}`}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

TodoListItems.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoListItems;
