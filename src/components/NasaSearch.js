import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Row, Col} from "react-bootstrap";
import SearchJson from './../search.json';

export function NasaSearch() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('sun');

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('https://images-api.nasa.gov/search?q=' + query);
            if (!ignore) setData(result.data.collection.items);
            //console.log(result.data.collection.items);
        }

        fetchData();
        return () => {ignore = true;}
    }, [query]);

    const onChangeHandler = event => {
        setQuery(event.target.value);
    }

    return (
        <Container>
            <Row className='search-bar-container'>
                <Col className=''>
                    <input placeholder='Search for ... (e.g. "Sun")' value={query} onChange={onChangeHandler}/>
                </Col>
            </Row>
            <Row className='m-auto'>
                <Col>{data.map(item => (
                    <img className='search-img' onClick={item.data} src={item.links[0].href} alt=""/>
                ))}
                </Col>
            </Row>
        </Container>
    )
}