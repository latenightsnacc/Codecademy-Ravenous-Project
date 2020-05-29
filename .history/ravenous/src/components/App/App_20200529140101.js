import React from 'react';
import './App.css';
// import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';




// const businesses = [
//   business, business, business, business, business, business
// ];

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList  /> 
    </div>
  );
}

export default App;
