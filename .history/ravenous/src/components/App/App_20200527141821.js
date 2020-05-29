import React from 'react';
// import logo from './logo.svg';
import BusinessList from '.../BusinessList/BusinessList.js';
import SearchBar from '.../SearchBar/SearchBar.js';
import './App.css';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

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
