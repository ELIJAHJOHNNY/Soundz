import React from 'react';
import "./AlbumInfo.css";

const AlbumInfo = ({album}) => {
    const artists=[];
    album?.artists?.forEach(artist => {
        artists.push(artist.name);
    });

  return (
    <div className='w-[80%] pb-[10px] '>
        <div className="w-[100%] overflow-hidden ">
          <div className="marquee" >
            <p className="text-[16px] text-[#c3d0e3] font-[700] " >{album?.name} - {artists.join(",")}</p>
          </div>
        </div>
        <div>
            <p className="album-info text-[14px] text-[#9aa9c2] font-[500] " >{`${album?.name} is ${album?.album_type.charAt(0) === "a" ? "an" : "a"} ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} ${album?.total_tracks > 1 ? "tracks" : "track"}`}</p>
        </div>
        <div>
            <p className="text-[12px] text-[#9aa9c2] mt-[5px] " >Release date: {album?.release_date}</p>
        </div>
    </div>
  )
}

export default AlbumInfo