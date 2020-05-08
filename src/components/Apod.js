import React, {useEffect, useState} from "react";
import axios from 'axios';

export function Apod() {
    const [postOfTheDay, setPostOfTheDay] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=osLuawkKpG2nuet7Xrc6kNQdP2oB3ZgxFQowUEMr')
            .then(response => {
                setPostOfTheDay(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, []); // empty array as a second argument to run this once and avoid infinite loop. This would be like componentDidMount with classes

        return (
            <div>
                <p>{postOfTheDay.date}</p>
                <h1>{postOfTheDay.title}</h1>
                <h4>{postOfTheDay.explanation}</h4>
                <img src={postOfTheDay.url} alt=""/>
            </div>
        )
}