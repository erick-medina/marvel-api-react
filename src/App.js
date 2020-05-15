import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.scss';
import Button from 'react-bootstrap/Button';
import {Apod} from './components/Apod';
import {NasaSearch} from "./components/NasaSearch";
import HomePage from "./components/HomePage";

function App() {

  return (
    <div className="App">
        <HomePage />
        <Apod />
        <NasaSearch />
    </div>
  );
}

export default App;

