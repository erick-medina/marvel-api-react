import React, {useEffect, useState} from "react";
import axios from 'axios';

export function NasaSearch() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('Orion');

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const result = await axios('https://images-api.nasa.gov/search?q=' + query);
            if (!ignore) setData(result.data.collection.items.links);
            console.log(result);
        }

        fetchData();
        return () => {ignore = true;}
    }, [query]);

    const onChangeHandler = event => {
        setQuery(event.target.value);
    }

    return (
        <>
            <input value={query} onChange={onChangeHandler}/>
            <h4>
                {data.map(item => (
                    <img src={item.href} alt=""/>
                ))}
            </h4>

        </>
    )
}