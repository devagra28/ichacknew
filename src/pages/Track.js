import React from 'react'
import Navbar from "../components/Navbar";
import TracksCard from "../components/TrackCard";

function Track() {
  return (
    <div className='bg-[#e3ebfa]'>
        <Navbar />
        <div className='px-[1%] '>
            <div className='justify-center pb-[5%]'>
                <h1 className='text-6xl text-center text-center font-[#5A6473] font-bold'>TRACKS</h1>
            </div>
            <TracksCard />
        </div>
    </div>
  )
}

export default Track