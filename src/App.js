import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Apod} from './components/Apod';
import {NasaSearch} from "./components/NasaSearch"
import {HomePage} from "./components/HomePage";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/apod" component={Apod}/>
                    <Route path="/search" component={NasaSearch}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

