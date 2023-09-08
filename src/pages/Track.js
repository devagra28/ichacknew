import React, {useEffect} from 'react'
import Navbar from "../components/Navbar";
import TracksCard from "../components/TrackCard";
import AOS from "aos";
import "aos/dist/aos.css";



function Track() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 200,
        duration: 800,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',

    });
  return (
    <div className='bg-[#e3ebfa]'>
        <Navbar />
        <div className='px-[1%]' data-aos="fade-up">
            <div className='justify-center pb-[5%]' >
                <h1 className='text-6xl text-center  font-[#5A6473] font-bold'>TRACKS</h1>
            </div>
            <TracksCard />
        </div>
    </div>
  )
}

export default Track