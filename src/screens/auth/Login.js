import React from 'react';
import {loginEndpoint} from "../../spotify";
const Login = () => {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] bg-[#1f1f1f] items-center justify-center '>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" className='w-[30%] mb-[30px] ' alt="spotify"/>
        <div className='cursor-pointer w-[200px] h-[50px] rounded-[50px] bg-[#fefefe] text-[#1f1f1f] text-[22px] font-[700] flex items-center justify-center '>
        <a href={loginEndpoint} >LOG IN</a>
        </div>
        
    </div>
  )
}

export default Login;