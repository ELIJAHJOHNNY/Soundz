import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {setClientToken} from "../spotify";
import Sidebar from "../components/sidebar/Sidebar"
import Login from './auth/Login';
import Favorite from './Favorite';
import Feed from './Feed';
import Library from './library/Library';
import Player from './player/Player';
import Trending from './Trending';

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
   const token = window.localStorage.getItem("token");
   const hash = window.location.hash;
    // window.location.hash="";
    if(!token && hash) {
      const _token = (window.location.hash.split("&")[0].split("=")[1]);
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
    
  }, [])

  return (
    !token ? (<Login />) : (
    <Router>
        <div className='bg-[#E99D72] w-[100vw] h-[100vh] rounded-[30px] flex'>
        <Sidebar /> 
        <Routes>
            <Route path='/' element={<Library />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/player' element={<Player />} />
            <Route path='/trending' element={<Trending />} />
        </Routes>
        </div>
    </Router> )
  )
}

export default Home