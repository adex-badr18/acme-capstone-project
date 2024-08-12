import React from 'react';
import image from "../../assets/acme-course.png";

import { Courses } from './components/Courses';
import Faq from './components/Faq';
const CourseDetailsPage = () => {

  return (
    <div className=' w-screen grid gap-12 px-20'>
      <section className=" w-full grid grid-cols-2 gap-20 py-8 mb-4 items-center justify-between border-b border-[#E4E4E7]">
        <h3 className='font-semibold text-[38px]/[57px] text-[#262626] text-nowrap'>
          Data Analysis
        </h3>
        <p className='text-base text-[#59595A] font-normal text-wrap'>
          Unlock the power of data with ACME's comprehensive Data Analysis course. Designed for aspiring analysts and professionals looking to enhance their skills, our course covers everything from data collection and cleaning to advanced analytical techniques and visualization.
        </p>
      </section>

      <section className='w-full '>
          <img src={image} className='w-full aspect-video object-fit border-8 rounded-xl border-[#E4E4E4FF]' alt="image" />
      </section>

      <Courses />

      <button className='justify-self-center py-7 my-16 px-20 bg-[#1B40B3] flex gap-3 items-center rounded-2xl font-bold text-white text-xl outline-0'>
        Apply Now
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_145_575)">
          <path d="M4.26318 14.5983H23.0256" stroke="white" stroke-width="2.27423" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.3501 6.92273L23.0256 14.5983L15.3501 22.2738" stroke="white" stroke-width="2.27423" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_145_575">
          <rect width="27.2908" height="27.2908" fill="white" transform="translate(-0.000976562 0.952637)"/>
          </clipPath>
          </defs>
         </svg>

      </button>


      <section className='grid grid-cols-2 p-16 gap-20'>
        <aside className='grid gap-10 place-content-start'>
          <div className="text-wrap text-left text-wrap w-3/4">
            <h2 className='font-semibold text-[38px]/[45.6px] text-[#262626] mb-3'>
              Frequently Asked Questions
            </h2>
            <p className='font-normal text-base text-[#333333] text-wrap'>
              Still you have any questions? Contact our Team via support@skillbridge.com
            </p>
          </div>
          <button className='w-fit border border-[#F1F1F3] py-3 px-5 rounded-md text-sm font-medium text-[#262626]'>
            See All FAQ’s
          </button>
        </aside>
        <aside>
          <Faq />
        </aside>
      </section>
    </div>
  )
}

export default CourseDetailsPage