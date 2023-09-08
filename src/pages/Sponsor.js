import React from 'react'
import SponsorCard from "../components/SponsorCard";
import Navbar from "../components/Navbar";

function Sponsor() {
  return (
    <>
        <div className='bg-[#e3ebfa]'>
            <Navbar />
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-6xl text-center font-[#5A6473] font-bold mb-[5vh]'>
                        SPONSORS
                    </h1>
                </div>
                <SponsorCard/>
            </div>
        </div>
    </>
  )
}

export default Sponsor;