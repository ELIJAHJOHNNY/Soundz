import React from 'react';
import AlbumImage from './AlbumImage';
import AlbumInfo from './AlbumInfo';

const SongCard = ({album}) => {
  return (
    <div className='w-full h-[63%] bg-[#27354d] rounded-[30px] rounded-br-none flex flex-col items-center justify-center '>
        <AlbumImage url={album?.images[0]?.url} />
        <AlbumInfo album={album} />
    </div>
  )
}

export default SongCard