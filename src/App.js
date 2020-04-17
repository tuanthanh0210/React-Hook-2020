import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
// import ColorBox from './components/ColorBox/ColorBox';

function App () {
  const [todoList, setTodoList] = useState ([
    {id: 1, title: 'Eating'},
    {id: 2, title: 'Sleeping'},
    {id: 3, title: 'Coding'},
  ]);
  function handleRemoveTodo (todo) {
    const index = todoList.findIndex (x => x.id === todo.id);
    const newTodo = [...todoList];
    newTodo.splice (index, 1);
    setTodoList (newTodo);
  }

  function handleAddTodo(value){
    const newTodo = {
      id: todoList.length+1,
      title: value
    }

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)
  }
  return (
    <div className="App">
      {/* <ColorBox /> */}
      <TodoList todos={todoList} onTodoClick={handleRemoveTodo} onTodoSubmit={handleAddTodo}/>
    </div>
  );
}

export default App;
