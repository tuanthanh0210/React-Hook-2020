import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss'

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList (props) {
  const {todos, onTodoClick} = props;

  function handleClick (todo) {
    if (onTodoClick) {
      onTodoClick (todo);
    }
  }
  return (
    <div className='TodoList'>
    <h2>React Hook - TodoList</h2>
      <ul>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => handleClick (todo)}>{todo.title}</li>
      ))}
      </ul>
    </div>
  );
}

export default TodoList;
