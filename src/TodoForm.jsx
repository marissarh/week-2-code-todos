import PropTypes from 'prop-types';

const TodoForm = ({addItem, itemToAdd, setItemToAdd})=>{
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
      </>
    )
}

TodoForm.propTypes = {
    itemToAdd: PropTypes.string,
    addItem: PropTypes.func,
    setItemToAdd: PropTypes.func,
}
export default TodoForm;