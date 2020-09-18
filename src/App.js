import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import Player from './Player'
import SpotifyWebApi from 'spotify-web-api-js'
import {useDataLayerValue} from "./DataLayer"

const spotify = new SpotifyWebApi()

function App() {
  // const [token, setToken] = useState(null)
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(()=>{
    const hash = getTokenFromUrl()
    window.location.hash=""
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token)
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      // setToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

    }
    
    spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type: "SET_PLAYLISTS",
        playlists:playlists
      })
    })
    
  },[token])
  
  return (
    //BEM
    <div className="app">
    {!token && <Login />}
    {token && <Player spotify={spotify} />}
  </div>
  );
}

export default App;
