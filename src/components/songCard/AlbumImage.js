import React from 'react';
import "./AlbumImage.css";

const AlbumImage = ({url}) => {
  return (
    <div className=' w-[80%] flex items-center justify-center relative'>
            <img src={url} className="w-full h-[90%] z-10 aspect-square rounded-[30px]" alt="Album art" />
        <div className=''>
            <img src={url}  alt="Album art" className='z-0 w-[95%] h-[90%] aspect-square albumImage absolute top-[25px] right-0 rounded-[30px]' />
        </div>
    </div>
  )
}

export default AlbumImage;
