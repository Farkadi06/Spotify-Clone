import React, {useEffect,useState} from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './Componenets/DataLayer';
import Login from './Componenets/Login';
import Player from './Componenets/Player';
import { getTokenFromResponse } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [{/* distructure the dataLayer*/ user,token},dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash ="";
    const _token = hash.access_token
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe()
      .then((user) => {
        console.log("Hello ", user)
        dispatch({
          type:'SET_USER',
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists)=> {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        })
        console.log("Herrrrrrrrrrrrrr :",playlists)
      })
    }
    
  },[])
  console.log("--User---> " , user)
  console.log("--Token---> " , token)

  return (
    <div className="app">
      {
        token ? (
          <Player spotify= {spotify}/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
