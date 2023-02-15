import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {IconContext} from "react-icons";
import "./Sidebar.css";

const SidebarButton = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname === props.to
  const activeButton = active ? "w-[60px] h-[60px] rounded-[20px] my-[5px] active-button active-icon" : "inactive-opacity icons w-[60px] h-[60px] rounded-[30px] my-[5px]" 
  const activeText = active ? "font-[600] text-[14px] text-white" : " font-[600] text-[14px] text-[#F8D9C0]"
  return (
    <button onClick={() => navigate(props.to)} id="butt" className={activeButton} >
        <div className=" flex transition-all duration-500 ease-in-out flex-col items-center justify-center" >
          <IconContext.Provider value={{size:"24px"}}>
          {props.icon}
          </IconContext.Provider>
          <p className={activeText}>{props.title}</p>   
        </div>
    </button>
  )
}

export default SidebarButton;