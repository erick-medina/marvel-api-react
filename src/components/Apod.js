import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Row, Col} from "react-bootstrap";
import './../App.scss';
import ApodJson from './../Apod.json';

export function Apod() {
    const [postOfTheDay, setPostOfTheDay] = useState(ApodJson);

    useEffect(() => {
       /* axios
            .get('https://api.nasa.gov/planetary/apod?api_key=osLuawkKpG2nuet7Xrc6kNQdP2oB3ZgxFQowUEMr')
            .then(response => {
                setPostOfTheDay(response.data)
            })
            .catch(error => {
                console.log(error)
            });*/
    }, []); // empty array as a second argument to run this once and avoid infinite loop. This would be like componentDidMount with classes

        const {date, title, explanation, url, copyright} = postOfTheDay; // object destructuring

        return (
            <Container>
                <h1 className='apod-title'>Astronomy Picture of the Day</h1>
                <p>Written by: {copyright}</p>
                <p>Date: {date}</p>
                <h1>{title}</h1>
                <h4>{explanation}</h4>
                <img src={url} alt=""/>
            </Container>
        )
}