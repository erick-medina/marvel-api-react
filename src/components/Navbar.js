import React from 'react';
import materialize from 'materialize-css';
import {Link} from "react-router-dom";
import {HomePage} from "./HomePage";
import {Apod} from "./Apod";
import {NasaSearch} from "./NasaSearch";

export function Navbar() {
    return (
        <nav className='nav'> Logo
            <ul className='nav-link'>
                <Link to={'/home'} component={HomePage}>
                    <li>Home</li>
                </Link>
                <Link to={'/apod'} component={Apod}>
                    <li>Astronomy Picture of the Day</li>
                </Link>
                <Link to={'/search'} component={NasaSearch}>
                    <li>Search</li>
                </Link>
            </ul>
        </nav>
    )
}