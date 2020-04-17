import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios';
import PostList from './components/PostList/PostList';

function App () {
  const [todoList, setTodoList] = useState ([
    {id: 1, title: 'Eating'},
    {id: 2, title: 'Sleeping'},
    {id: 3, title: 'Coding'},
  ]);

  const [postList, setPostList] = useState ([]);

  useEffect (() => {
    async function fetchData () {
      try {
        const postListAPI = await axios.get (
          'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
        );
        setPostList(postListAPI.data.data);
      } catch (error) {
        console.log (error);
      }
    }
    fetchData()

    // return () => {
    //   cleanup;
    // };
  }, []);

  function handleRemoveTodo (todo) {
    const index = todoList.findIndex (x => x.id === todo.id);
    const newTodo = [...todoList];
    newTodo.splice (index, 1);
    setTodoList (newTodo);
  }

  function handleAddTodo (value) {
    const newTodo = {
      id: todoList.length + 1,
      title: value,
    };

    const newTodoList = [...todoList];
    newTodoList.push (newTodo);
    setTodoList (newTodoList);
  }
  return (
    <div className="App">
      <PostList posts={postList} />
      {/* <ColorBox /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleRemoveTodo} onTodoSubmit={handleAddTodo}/> */}
    </div>
  );
}

export default App;
