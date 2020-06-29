import React from 'react';
import './App.css';
import TodoList from './containers/TodoList'
import AddTodo from './containers/AddTodo'
import Header from './components/Header'
import Filter from './containers/Filter'

function App() {
  return (
    <>
      <Header />
      <AddTodo />
      <Filter />
      <TodoList />
    </>
  );
}

export default App;
