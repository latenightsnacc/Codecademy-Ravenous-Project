import React from 'react';
// import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import './App.css';



const businesses = [
  business, business, business, business, business, business
];

function App() {
  return (
    <div class="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} /> 
    </div>
  );
}

export default App;
