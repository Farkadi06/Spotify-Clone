import React, {useEffect,useState} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Componenets/Login';
import { getTokenFromResponse } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash ="";
    const _token = hash.access_token
    if(_token){
      setToken(_token)

      spotify.setAccessToken(_token);
      spotify.getMe()
      .then(user => (console.log("Hello ", user)))
    }
  },[])

  return (
    <div className="app">
      {
        token ? (
          <h1>I am loged in</h1>
        ) : (
          <Login/>
        )
      }
      <Login />
    </div>
  );
}

export default App;
