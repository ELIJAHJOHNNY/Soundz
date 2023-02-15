import React from 'react';
import "./WidgetEntry.css";

const WidgetEntry = ({title, subtitle, image}) => {
  return (
    <div className="w-[100%] mt-[7%] flex" > 
        <img src={image} alt={title} className="h-[50px] w-[50px] rounded-[15px] mr-[10px] " />
        <div className="flex-col">
            <p className="title text-[16px] font-[700] text-[#c9d0e3] " >{title}</p>
            <p className="text-[12px] text-[#c4d0e37c] ">{subtitle}</p>
        </div>
    </div>
  )
}

export default WidgetEntry;