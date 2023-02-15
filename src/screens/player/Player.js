import React, {useEffect,useState} from 'react';
import {useLocation} from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard/SongCard";
import Queue from "../../components/queue/Queue";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import Widgets from "../../components/widgets/Widgets";

const Player = () => {
  const [tracks,setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  /** Funtion to get a list of all tracks in a playlist with the id gotten after being passed as an object property using useNavigate in the library file */
  useEffect(() => {
    if(location.state) {
      apiClient
        .get(`playlists/${location.state?.id}/tracks`)
        .then((response) => {
          setTracks(response.data.items);
          setCurrentTrack(response.data?.items[0]?.track);
        });
    }
  }, [location.state])

  /** Funtion to re render currently playing track as the array index changes */
  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track)
  }, [currentIndex,tracks]);

  return (
    <div className='screen-container flex'>
      <div className="w-[68%] h-full mr-[2%]" >
        <AudioPlayer currentTrack={currentTrack} total={tracks} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        <Widgets artistId={currentTrack?.album?.artists[0]?.id}/>
      </div>
      <div className="w-[30%] h-full flex justify-between flex-col">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  )
}

export default Player;