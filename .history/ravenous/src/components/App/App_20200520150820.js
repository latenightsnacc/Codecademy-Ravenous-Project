import React from 'react';
// import logo from './logo.svg';
import BusinessList from '.../BusinessList/BusinessList.js';
import SearchBar from '.../SearchBar/SearchBar.js';
import './App.css';

function App() {
  return (
    <div class="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList /> 
    </div>
  );
}

export default App;
