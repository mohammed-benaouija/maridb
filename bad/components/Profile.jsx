'use client'
import React from 'react';
function LevelBar({ value }) {
  const progressWidth = `${value}%`;

  return (
    <div className="bg-gray-200 h-5  w-64 rounded-full">
      <div className="bg-cyan-500 h-5 rounded-full relative" style={{ width: progressWidth }}>
        {/* <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
          {`${value}%`} */}
        {/* </span> */}
      </div>
    </div>
  );
}

const UseProfile = () => {
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

<div className='flex h-screen w-screen bg-blue-100 '>
  <div className='flex w-96 m-[200px] mb-8 ms-8 max-h-[65%] flex-none justify-center  bg-blue-500 rounded-[40px] p-6 round text-white'>
    <div class="text-center"> 
      <span>My Profile</span>
      <div className="mt-6">
        <img
          src="https://cdn.intra.42.fr/users/ba22da9cdadaa7371ef3f082374edf1b/small_mbenaoui.jpg"
          alt="Your Image Alt Text"
          className="w-32 h-auto  rounded-full inline-block" // Adjust the width as needed
          />
      </div>
      <div className='mt-6'>
        <h1>mmaqbour</h1>
        <span>mmaqbour@gmail.com</span>
      </div>
      <div class=" mt-6">
      <LevelBar value={40} />
      <p className=' mt-2 text-blue-200 uppercase'>level 8-86%</p>
      
      </div>
    </div>
  </div>
  <div className=' bg-blue-50 flex-1 w-80'>v</div>
  <div className='flex-1 bg-blue-200'>c</div>
</div>
      // </div>
//       <div class="grid grid-rows-3 grid-flow-col gap-4">
//   <div class="row-start-6  row-span-2  bg-black ...">01</div>
//   <div class="row-end-6 row-span-2 ...">02</div>
//   <div class="row-start-1 row-end-4 ...">03</div>
// </div>
          

    );
};

export default UseProfile;