import React, {useEffect, useState} from 'react';
import './App.scss';
import md5 from 'md5';
import Button from 'react-bootstrap/Button';

function App() {
    const [hasErrors, setHasErrors] = useState(false);
    const [characters, setCharacters] = useState({});

        async function fetchData() {
            // generate authentication for using api
            let publicKey = '8f5eb2eff23ce460b9fc804b431ebdc2';
            let privateKey = 'fbe5653495779cc37aebf02126294174993e3923';
            let timestamp = new Date().getTime();
            let hash = md5(timestamp + privateKey + publicKey);
            let url = 'https://gateway.marvel.com:443/v1/public/comics?ts=' + timestamp + '&apikey=' + publicKey + '&hash=' + hash;

            const response = await fetch(url);
            response
                .json()
                .then(response => setCharacters(response))
                .catch(error => setHasErrors(error));
        }
        useEffect(() => {
            fetchData();
        });

  return (
    <div className="App">
      <h1 className="">{JSON.stringify(characters)}</h1>
        <h1>Has error: {JSON.stringify(hasErrors)}</h1>
    </div>
  );
}

export default App;
