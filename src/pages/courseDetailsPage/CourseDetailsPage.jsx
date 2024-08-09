import React from 'react';
import image from "../../assets/acme-course.png";
const CourseDetailsPage = () => {
  return (
    <div className=' w-screen grid gap-12'>
      <section className=" w-full flex px-8 pb-9 items-center justify-between">
        <h3 className='font-semibold text-[38px]/[57px] text-black'>
          Data Analysis
        </h3>
        <p className='text-base text-[#59595A] font-normal text-wrap'>
          Unlock the power of data with ACME's comprehensive Data Analysis course. Designed for aspiring analysts and professionals looking to enhance their skills, our course covers everything from data collection and cleaning to advanced analytical techniques and visualization.
        </p>
      </section>

      <section className='w-full'>
          <img src={image} className='w-full object-fit' alt="image" />
      </section>

      <section className='grid grid-cols-2 gap-5'>
        <div className="flex flex-col p-10 gap-10 rounded-xl border border-[#1B40B3]">
          <h3 className="font-bold text-[60px] text-[#262626] self-end">
            01
          </h3>
          <p className='text-lg font-semibold text-[#333333]'>
            Exploratory Data Analysis (EDA)
          </p>
          <div className='flex flex-col gap-4 w-full'>
            <div className='w-full py-5 px-6 rounded-md border border-[#F1F1F3] flex flex-col gap-1'>
              <h5 className = "font-medium text-base text-[#333333]">
                Visualization Techniques
              </h5>
              <p className='font-normal text-[#59595A] text-sm'>
                Lesson 02
              </p>
            </div>
            <div className='w-full py-5 px-6 rounded-md border border-[#F1F1F3] flex flex-col gap-1'>
              <h5 className = "font-medium text-base text-[#333333]">
                Visualization Techniques
              </h5>
              <p className='font-normal text-[#59595A] text-sm'>
                Lesson 02
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-10 gap-10 rounded-xl border border-[#1B40B3]">
          <h3 className="font-bold text-[60px] text-[#262626] self-end">
            01
          </h3>
          <p className='text-lg font-semibold text-[#333333]'>
            Exploratory Data Analysis (EDA)
          </p>
          <div className='flex flex-col gap-4 w-full'>
            <div className='w-full py-5 px-6 rounded-md border border-[#F1F1F3] flex flex-col gap-1'>
              <h5 className = "font-medium text-base text-[#333333]">
                Visualization Techniques
              </h5>
              <p className='font-normal text-[#59595A] text-sm'>
                Lesson 02
              </p>
            </div>
            <div className='w-full py-5 px-6 rounded-md border border-[#F1F1F3] flex flex-col gap-1'>
              <h5 className = "font-medium text-base text-[#333333]">
                Visualization Techniques
              </h5>
              <p className='font-normal text-[#59595A] text-sm'>
                Lesson 02
              </p>
            </div>
          </div>
        </div>
      </section>

      <button className='justify-self-center nt-24 py-7 px-20 bg-[#1B40B3] flex items-center rounded-2xl font-bold text-white text-xl'>
        Apply now
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


      <section className='flex p-16 gap-16'>
        <aside className='grid gap-10'>
          <div className="text-wrap text-left">
            <h2 className='font-semibold text-[38px]/[45.6px] text-[#262626] '>
              Frequently Asked Questions
            </h2>
            <p className='font-normal text-base text-[#333333]'>
              Still you have any questions? Contact our Team via support@skillbridge.com
            </p>
          </div>
          <button className='border border-[#F1F1F3] py-3 px-5 rounded-md text-sm font-medium text-[#262626]'>
          See All FAQ’s
          </button>
        </aside>
      </section>
    </div>
  )
}

export default CourseDetailsPage