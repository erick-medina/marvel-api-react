import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.scss';
import Button from 'react-bootstrap/Button';
import {Apod} from './components/Apod';
import {NasaSearch} from "./components/NasaSearch";

function App() {

  return (
    <div className="App">
        <Apod />
        {/*<NasaSearch />*/}
    </div>
  );
}

export default App;

