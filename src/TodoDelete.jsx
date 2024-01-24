import { PropTypes } from 'prop-types';

const TodoDelete = ({setTodos})=> {
    const deleteItems = () =>{
        setTodos([]);
    }
return(
    <>
    <button type="delete" onClick={deleteItems}>Delete List</button></>
)
}

TodoDelete.propTypes = {
    setTodos: PropTypes.func.isRequired,

}
export default TodoDelete;