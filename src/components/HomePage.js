import React from "react";
import {Link} from "react-router-dom";
import background from "../img/background-home.jpg";
import {Container, Row, Col} from "react-bootstrap";

export const HomePage = () => {
    const homeContainer = {
        position: 'fixed',
        minWidth: '100%',
        minHeight: '100%',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    const navHome = {
        fontSize: '20px'
    };

    return (
        <div style={homeContainer}>
            <h1 className='display-3'>Bienvenus dans cette aventure !</h1>
            <Container clasName='content-home'>
                <Row className='text-center'>
                    <Col>
                        <Link to='/'>
                            <h3>Home</h3>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/apod'>
                            <h3>Astronomy Picture of the Day</h3>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/search'>
                            <h3>Search a new discovery</h3>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}