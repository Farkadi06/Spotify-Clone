import React, {useEffect,useState} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './Componenets/DataLayer';
import Login from './Componenets/Login';
import Player from './Componenets/Player';
import { getTokenFromResponse } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)
  const [{},dispatch] = useDataLayerValue();

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
          <Player/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
