import React, {useEffect, useState} from "react";
import axios from 'axios';

function Apod() {
    const [postOfTheDay, setPostOfTheDay] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=osLuawkKpG2nuet7Xrc6kNQdP2oB3ZgxFQowUEMr')
            .then(response => {
                console.log(response)
                setPostOfTheDay(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

        return (
            <div>
                <h1>{postOfTheDay.title}</h1>
            </div>
        )
}

export default Apod;