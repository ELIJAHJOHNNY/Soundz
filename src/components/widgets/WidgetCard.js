import React from 'react';
import './WidgetCard.css';
import WidgetEntry from "./WidgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

const WidgetCard = ({title, similar, featured, newRelease}) => {
  return (
    <div className='hover:scale-[1.05] widgetCard w-[30%] cursor-pointer h-[85%] rounded-[30px] px-[3%] py-[1%] overflow-hidden '>
      <p className="w-full text-[18px] font-[800] text-[#c9d0e3]  " >{title}</p>
      <div className="w-full h-full overflow-y-auto widgetEntryCard ">
      {
        similar ? similar.map((artist) => (
          <WidgetEntry title={artist?.name} subtitle={artist?.followers?.total + " Followers"} image={artist?.images[2]?.url} />
          )) : featured ? featured.map((playlist) => (
          <WidgetEntry title={playlist?.name} subtitle={playlist?.tracks?.total + " Songs"} image={playlist?.images[0]?.url} />
          )) : newRelease ? newRelease.map((album) => (
          <WidgetEntry title={album?.name} subtitle={album?.artists[0]?.name} image={album?.images[2]?.url} />
          )) : null
      }
      </div>
      <div className="widget-fade">
        <div className="fade-button">
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default WidgetCard
