import React from 'react';
import "./Controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

const Controls = ({isPlaying, setIsPlaying, handleNext, handlePrev, total}) => {
  const playPause = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className='flex w-[50%]'>
      <IconContext.Provider value={{size:"35px", color:"#C4D0E3"}}>
        <div className=' w-full flex justify-evenly'>
          <div className='buttons hover:scale-[1.1] cursor-pointer rounded-[20px] w-[65px] h-[65px] flex items-center justify-center ' onClick={() => handlePrev()}>
            <IoPlaySkipBack />
          </div>
          <div className={isPlaying ? 'pause buttons hover:scale-[1.1] cursor-pointer bg-[#c96850] rounded-[20px] w-[65px] h-[65px] flex items-center justify-center ' : 'play buttons hover:scale-[1.1] cursor-pointer bg-[#c96850] rounded-[20px] w-[65px] h-[65px] flex items-center justify-center '} onClick={() => playPause()}>
            {isPlaying ? <FaPause/> : <IoPlay /> }
          </div>
          <div className='buttons hover:scale-[1.1] cursor-pointer rounded-[20px] w-[65px] h-[65px] flex items-center justify-center ' onClick={() => handleNext()}>
            <IoPlaySkipForward />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default Controls