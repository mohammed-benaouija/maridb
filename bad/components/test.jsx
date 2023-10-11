'use client'
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Friends from "./Friend";
import Rank from "./Rank";
function LevelBar({ value }) {
  
  const progressWidth = `${value}%`;

  return (
    <div className="bg-gray-200 h-5  w-80 rounded-full">
      <div className="bg-cyan-500 h-5 rounded-full relative" style={{ width: progressWidth }}>
        {/* <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
          {`${value}%`} */}
        {/* </span> */}
      </div>
    </div>
  );
}

const UseProfile = () => {
  const [check, setCheck] = useState(1);
    return (


        // <section className="bg-blue-100 min-h-screen flex items-center justify-center">
        //     <div className= "flex bg-blue-50  rounded-2xl  max-w-5xl p-5 items-center">
        //         <div className="md:w-1/2 px-0 md:px-16">
        //             <div className="flex flex-col  bg-blue-500 rounded-2xl md:px-16" >
        //                 <h2 className="font-bold text-2xl text-[#002D74]">Your Profile</h2>
        //                 <div className=" flex  flex-wrap h-16 w-16 md:block mt-4 ">
        //                     <img className="rounded-full w-full object-cover" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="Login" />
        //                 </div>
        //             </div>
        //         </div >
        //     </div>
        // </section>
 <div className='flex  min-h-screen  min-w-screen  justify-center  items-start bg-blue-100 p-6 '>
    <div className="flex  "><button className="relative  z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
    <span class="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 m-auto" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
      </svg>
    </span>
        </button> 


  <div  className="z-30  fixed   -left-96  lg:min-h-[100px] lg:left-auto flex-none  lg:-ml-[350px] lg:mt-[120px] lg:p-6 lg:mb-10  lg:w-96 shadow-blue-600 justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[40px] p-6 mt-[55px]  text-white shadow-2xl peer-focus:left-auto peer:transition ease-out delay-150 duration-200">
    <div className="text-center"> 
      <span>My Profile</span>
      <div className="mt-6">
        <img
          src="https://i.pinimg.com/564x/dc/51/61/dc5161dd5e36744d184e0b98e97d31ba.jpg"
          alt="Your Image Alt Text"
          className="w-44 h-auto  rounded-full inline-block" // Adjust the width as needed
          />
      </div>
      <div className='mt-6'>
        <h1 className="text-xl font-bold">mmaqbour</h1>
        <span className="text-sm  font-serif italic flex justify-center mt-3">mmaqbour@gmail.com</span>
      </div>
      <div class="mt-8">
      <LevelBar value={60} />
      <p className=' mt-4 text-blue-200 font-serif italic uppercase'>level 8-86%</p>
      </div>
      <div className='mt-6'>
            <Link className="text-base font-bold flex justify-center items-center text-[#2c4d82]" href={"/register"}><span className="underline py-2 px-12 bg-white border rounded-full hover:scale-110 duration-300">Edit Profile</span>
            </Link>
          <h1 className="flex  mt-[50px] ">Recent Activities</h1>
         
          <img
          src="https://w0.peakpx.com/wallpaper/616/177/HD-wallpaper-table-tennis-neon-icon-blue-background-neon-symbols-table-tennis-neon-icons-table-tennis-sign-sports-signs-table-tennis-icon-sports-icons.jpg"
          alt="Your"
          className="w-80 mt-6 h-60  rounded-[32px] inline-block"
          />
          {/* <button className="flex justify-center  items-center mt-6  bg-[#f4f5f8] transition-all active:scale-100 rounded-xl text-[#2c4d82] py-2 px-12 hover:scale-105 ">Login</button> */}
            </div>
            <div className="mt-8">
            <button className="bg-[#eceef1]  transition-all active:scale-100 rounded-xl text-[#2c4d82] py-2 px-32 hover:scale-105 ">Logout</button>
            </div>
    </div>
  </div>
  
  </div>
<div className="">
  
  <div className=" flex flex-col gap-8    w-64 items-center shadow-lg shadow-blue-500 bg-white  mt-[160px] min-h-[845px]  rounded-[0px] p-6">
      <div><button onClick={() => setCheck(1)} className=" mt-60 px-[101px] py-2   g shadow-blue-600  justify-center bg-gradient-to-r from-blue-500 to-cyan-200  text-white">Friends</button></div>
      <div><button onClick={() => setCheck(2)} className=" mt-20  px-[110px] py-2 shadow-blue-600 justify-center bg-gradient-to-r from-blue-500 to-cyan-200    text-white">Rank</button></div>
    
    </div>

</div>
  <div className=" flex w-[900px]  opacity-50  md:opacity-150 bg-white mt-[160px] min-h-[845px] flex-col   rounded-r-[50px] p-6">
    {
      check === 1 && <Friends/>

    }
    {
      check === 2 && <Rank/>
    }
    </div>
    {/* <div className="z-10 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div> */}
</div>
//       <div class="grid grid-rows-3 grid-flow-col gap-4">
//   <div class="row-start-6  row-span-2  bg-black ...">01</div>
//   <div class="row-end-6 row-span-2 ...">02</div>
//   <div class="row-start-1 row-end-4 ...">03</div>
// </div>
          

    );
};

export default UseProfile;

//////////////////////////////
'use client';
// import {signOut} from "next-auth/react";
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useState } from "react";

export default function Home() {
  const [foto_user, setfoto_user] = useState("");
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:3333/auth/user', {
          credentials: 'include',
        });
        const content = await response.json();
        setfoto_user(content.foto_user);
        setEmail(content.email);
        setUsername(content.username);
      }
    )();
  });
  return (
    <div class="h-screen bg-gray-400">
      <div class="mx-auto flex  justify-end p-2 ">
        <div  onClick={toggleDropdown}  class="relative inline-block ">
          <button class=" flex h-12 w-12 items-center  overflow-hidden rounded-lg bg-slate-900 text-slate-100 ring-slate-100  hover:shadow-md hover:ring-2">
            <img class="w-full object-cover " src={foto_user} alt="Profile" />
          </button>
          { isOpen && (
          <div  class="absolute right-0 mt-3 flex w-60 flex-col gap-3 rounded-xl bg-slate-900 p-4 text-slate-100 shadow-lg">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border-2 border-slate-600">
                <img class="w-full object-cover" src={foto_user} alt="Profile" />
              </div>
              <div>
                <div class="flex gap-1 text-sm font-semibold">
                  <span>{username}</span>
                  <span class="text-sky-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor" class="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                    </svg>
                  </span>
                </div>
                <div class="text-xs text-slate-400">{Email}</div>
              </div>
            </div>
            <div class="border-t border-slate-500/30"></div>
            <div class="flex justify-around">
              <div class="flex flex-col items-center justify-center">
                <span class="text-3xl font-semibold">268</span>
                <span class="text-sm text-slate-400">Win</span>
              </div>
              <div class="flex flex-col items-center justify-center">
                <span class="text-3xl font-semibold">897</span>
                <span class="text-sm text-slate-400">Lost</span>
              </div>
            </div>
            <div class="border-t border-slate-500/30"></div>
            <div class="flex flex-col">
              <a href="#" class="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                </svg>
                <span>Profile</span>
              </a>
              <a href="#" class="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
                </svg>
                <span>Help Center</span>
              </a>
            </div>
            <a  href="/" class="flex justify-center gap-3 rounded-md bg-red-600 py-2 px-3 font-semibold hover:bg-red-500 focus:ring-2 focus:ring-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
              </svg>
              <span>Logout</span>
            </a>
          </div>)
      }
        </div>
      </div>
      </div>

      )
};







<div className="">
  <button class="relative z=30  -m-10 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
    <span class="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 m-auto" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
      </svg>
    </span>
  </button>


  <div className="flex  z=30 flex-col gap-8 bg-white w-64 items-center shadow-2xl shadow-blue-500 mt-[160px] min-h-[845px] rounded-[0px] p-6 fixed  -left-96 lg:w-64 peer-focus:left-0 peer:transition">
      <div><button onClick={() => setCheck(1)} className=" mt-60 px-[101px] py-2   g shadow-blue-600  justify-center bg-gradient-to-r from-blue-500 to-cyan-200  text-white">Friends</button></div>
      <div><button onClick={() => setCheck(2)} className=" mt-20  px-[110px] py-2 shadow-blue-600 justify-center bg-gradient-to-r from-blue-500 to-cyan-200    text-white">Rank</button></div>
    
    </div>

</div>




