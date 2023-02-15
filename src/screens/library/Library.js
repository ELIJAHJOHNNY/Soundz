import React, {useState,useEffect} from 'react';
import apiClient from "../../spotify.js";
import {useNavigate} from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Library.css";

const Library = () => {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
    });
  }, []);

  const playPlaylist = (id) => {
    navigate("/player", {state: {id:id}})
  }

  return (
    <div className='screen-container h-auto'>
      <div className=' w-full h-auto p-[3%] flex justify-between flex-wrap overflow-y-auto'>
            {playlists.map((playlist) => 
               (
                  <div onClick={() => playPlaylist(playlist.id)} key={playlist.id} className="cursor-pointer relative hover:scale-[1.02] playlist-card w-[17%] h-[35%] rounded-[20px] bg-[rgb(30,42,62)] border-2 border-[rgb(54,69,98,0.18)] p-[1%] mb-[2%] ">
                    <img src={playlist.images[0].url} alt="Playlist Art" className="aspect-square w-full rounded-[15px] "/>
                    <p className="playList-name font-[800] text-[16px] text-[#c4d0e3] " >{playlist.name}</p>
                    <p className="font-[400] text-[12px] text-[#c4d0e37c] ">{playlist.tracks.total > 1 ? `${playlist.tracks.total} Songs` : `${playlist.tracks.total} Song`} </p>
                    <div id="playIcon" className="playIcon absolute w-full p-[4%] h-[25%] rounded-[20px] opacity-0 bottom-0 right-0 flex items-end justify-end ">
                      <IconContext.Provider value={{ size: "40px", color: "#E99D72" }} onClick={() => playPlaylist(playlist.id)} >
                        <AiFillPlayCircle />
                      </IconContext.Provider>
                    </div>
                  </div>
                  
              )
            )}
      </div>
    </div>
  )
}

export default Library;
