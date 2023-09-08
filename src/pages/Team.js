import React from 'react'
import TeamCard from "../components/TeamCard";
import Navbar from "../components/Navbar";

export const Team = () => {
    return (
        <div className='bg-[#e3ebfa]'>
            <Navbar />
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-6xl text-center font-[#5A6473] font-bold mb-[5vh] ">
                    TEAM
                </h1>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <TeamCard/>
                </div>
            </div>
        </div>

    );
};

export default Team;