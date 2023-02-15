import React from 'react';
import "./Queue.css";

const Queue = ({tracks,setCurrentIndex}) => {
  return (
    <div className='queueContainer flex flex-col rounded-tr-none items-center justify-center h-[35%] w-full rounded-[30px] bg-[#3e61d2] '>
      <div className="h-[85%] w-[80%] flex flex-col ">
        <p className="text-white text-left text-[20px] font-[700] mb-[10px] ">Up Next</p>
        <div className='overflow-y-auto queue-list h-[80%] cursor-pointer'>
          {tracks?.map((track,index) => (
            <div key={tracks?.track?.id} className=' queue-track-name hover:scale-[0.95] flex justify-between' onClick={() => setCurrentIndex(index)}>
              <div className=" w-[70%] my-[5px] text-ellipsis  ">
              <p className='text-ellipsis  text-[14px] text-white '>{track?.track?.name}</p>
              </div>
              <p className='text-[14px] text-white hover:scale-[0.95] '>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Queue