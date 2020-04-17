import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios';
import PostList from './components/PostList/PostList';
import Pagination from './components/Pagination/Pagination';
import queryString from 'query-string'
import PostFilterForm from './components/PostFilterForm/PostFilterForm';

function App () {
  const [todoList, setTodoList] = useState ([
    {id: 1, title: 'Eating'},
    {id: 2, title: 'Sleeping'},
    {id: 3, title: 'Coding'},
  ]);

  const [postList, setPostList] = useState ([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totoalRows: 1
  })

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: ''
  })

  useEffect (() => {
    async function fetchData () {
      try {
        const paramString = queryString.stringify(filters) 
        const postListAPI = await axios.get (
          `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        );
        setPostList(postListAPI.data.data);
        setPagination(postListAPI.data.pagination)
      } catch (error) {
        console.log (error);
      }
    }
    fetchData()

    // return () => {
    //   cleanup;
    // };
  }, [filters]);

  function handlePageChange(newPage){
    console.log('newpage' + newPage)
    setFilters({
      ...filters,
      _page: newPage
    })
  }

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

  function handleFilterChange(newFilter){
    console.log(newFilter)
    setFilters({
      ...filters,
      _page : 1,
      title_like : newFilter.searchTerm
    })
  }

  return (
    <div className="App">
      <h2>React Hook</h2>
      <PostFilterForm onSubmit={handleFilterChange}/>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange}/>
      {/* <ColorBox /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleRemoveTodo} onTodoSubmit={handleAddTodo}/> */}
    </div>
  );
}

export default App;
