import React, { useState, useReducer, Component } from 'react';
import './App.css';
import { uuid } from 'uuidv4';
import Entries from './Entries'
import AddTodo from './components/AddTodo'
import Header from './components/Header'

function App() {
  const [entries, updateEntries] = useState([]);
  const todoSubmit = entry => {
    console.log(entry);
    let newEntry = {
      text: entry,
      completed: false,
      id: uuid()
    }
    updateEntries([...entries, newEntry]);
  }

  const entryChange = id => {
    const entryList = entries.map(e => {
      console.log(`entry id: ${e.id}, other id: ${id}`);
      if (e.id === id)
        e.completed = ! e.completed;
      console.log(e);
      return e;
    });
    //console.log(entryList);
    updateEntries(entryList)
  }

  const deleteEntry = id => {
    const newList = entries.filter(e => e.id !== id)
    updateEntries(newList);
  }
  return (
    <>
      <Header />
      <AddTodo onSubmit={todoSubmit} />
      <Entries entries={entries} changeEntry={entryChange} delete={deleteEntry} />
    </>
  );
}

export default App;
