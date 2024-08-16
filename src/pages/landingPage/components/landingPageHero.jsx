import React from 'react'
import { Link } from 'react-router-dom/dist'
import FlashIcon from "../../../assets/icons/flashIcon.png"
import Slider from 'react-slick';
import image from '../../../assets/images/headerImage.jpeg'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const LandingPageHero = () => (
    <div style={{backgroundImage: `url("${image}")`}} className="relative bg-cover bg-center bg-[url('/src/assets/images/headerImage.jpeg')] w-full min-h-96 flex flex-col justify-center items-center px-10 md:px-80 borde border-red-600">
        <div className="absolute inset-0 bg-zinc-950 opacity-80"> </div>
        <div className='relative z-20 flex flex-col gap-4 items-center borde'>
            <div className='w-full bg-white text-xl md:text-4xl text-center flex justify-center gap-4 items-center py-4 font-bold rounded-lg borde'>

                <img src={FlashIcon} alt="" />
<h1>
                <span className='text-blue-700 inline'>Where</span>
    <span className='text-gray-900 inline'> Tech Dreams Take Flight</span>
  </h1>
            </div>
            <div className='w-full text-center text-off-white borde'>
                <p>At Acme, we create stunning, responsive websites that are tailored tomeet your business goals.</p>
            </div>
            {/* BUTTON IS HERE */}
            <div className='items-center'>
                <a href="#about-us-section">
                    <button className='bg-blue-700 text-white font-bold px-4 py-2 rounded-lg'>Learn More</button>
                </a>

            </div>
        </div>


    </div>
)

export default LandingPageHero