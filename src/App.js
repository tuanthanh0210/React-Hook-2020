import React, {useState} from 'react';
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
  return (
    <div className="App">
      {/* <ColorBox /> */}
      <TodoList todos={todoList} onTodoClick={handleRemoveTodo} />
    </div>
  );
}

export default App;
