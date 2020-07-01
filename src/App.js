import React from 'react';
import './App.css';
import TodoList from './containers/TodoList'
import AddTodo from './containers/AddTodo'
import Header from './components/Header'
import Filter from './containers/Filter'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='controls'>
        <AddTodo />
        <Filter />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
