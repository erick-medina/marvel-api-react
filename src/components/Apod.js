import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Row, Col, Media} from "react-bootstrap";
import './../App.scss';
import ApodJson from './../Apod.json';
import {Navbar} from "./Navbar";

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

    const {date, title, explanation, url, copyright} = postOfTheDay; // object destructuring

    return (
        <div>
            <Navbar/>
            <Container>
                <Row className='my-3'>
                    <Col>
                        <h1 className='display-4 text-center'>Astronomy Picture of the Day</h1>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col md={4}>
                        <p>Written by: {copyright}</p>
                    </Col>
                    <Col md={4}>
                        <p>Date: {date}</p>
                    </Col>
                </Row>
                <Media>
                    <img
                        width={300}
                        height={300}
                        className="mr-3"
                        src={url}
                    />
                    <Media.Body>
                        <h5 className='display-4'>{title}</h5>
                        <p>{explanation}</p>
                    </Media.Body>
                </Media>
            </Container>
        </div>
    )
}