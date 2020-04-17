import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss'

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
  onTodoSubmit: PropTypes.func
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
  onTodoSubmit: null,
};

function TodoList (props) {
  const {todos, onTodoClick, onTodoSubmit} = props;
  const [value, setValue] = useState('')

  function handleValueChange(e){
    setValue(e.target.value)
  }

  function handleClick (todo) {
    if (onTodoClick) {
      onTodoClick (todo);
    }
  }

  function handleSubmit(e){
    console.log(value)
    e.preventDefault();
    if(!onTodoSubmit) return;
    onTodoSubmit(value)
    setValue('')
  }
  return (
    <div className='TodoList'>
    <h2>React Hook - TodoList</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={handleValueChange} value={value}/>
      </form>
      <ul>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => handleClick (todo)}>{todo.title}</li>
      ))}
      </ul>
    </div>
  );
}

export default TodoList;
