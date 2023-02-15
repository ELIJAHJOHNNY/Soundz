import React, {useState,useEffect} from 'react';
// import user from "../../assets/user.ico";
import apiClient from "../../spotify";
import SidebarButton from "./SidebarButton.js";
import {MdOutlineLibraryMusic, MdOutlineFavorite, MdSpaceDashboard, MdLibraryMusic} from "react-icons/md";
import {FaGripfire, FaSignOutAlt} from "react-icons/fa";

function Sidebar() {
  const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU");
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="w-[100px] h-[100%] rounded-[30px] bg-[#E99D72] flex flex-col items-center justify-between pt-[20px] " >
      <img src={image} alt="user" className="w-[50px] h-[50px] rounded-[20px] " />
      <div className='flex flex-col justify-between'>
        <SidebarButton to="/" title="Library" icon={<MdOutlineLibraryMusic />} />
        <SidebarButton to="/player" title="Player" icon={<MdLibraryMusic />} />
        <SidebarButton to="/trending" title="Trending" icon={<FaGripfire />}/>
        <SidebarButton to="/favorite" title="Favorite" icon={<MdOutlineFavorite />}/>
        <SidebarButton to="/feed" title="Feeds" icon={<MdSpaceDashboard />} />
      </div>
      <SidebarButton title="Sign Out" icon={<FaSignOutAlt />}/>
    </div>
  )
}

export default Sidebar;