import React from 'react'
import { Link } from 'react-router-dom'
import Computer from "/src/assets/images/computer.png"
import Jane from "/src/assets/images/jane.png"
import Jenny from "/src/assets/images/jenny.png"
import Esther from "/src/assets/images/esther.png"
import Data from "/src/assets/images/data.png"
import Web from "/src/assets/images/web.png"
import ArrowUpRight from "/src/assets/icons/arrow-up-right.png"
import Star from "/src/assets/icons/starRating.png"


const OurCourses = () => {
  return (
    <div className='w-full h-full md:h-full flex flex-col justify-center items-center py-10 bg-[#F9FCFF] px-10 md:px-20 borde border-red-600'>
      <div className='text-center borde mb-5 '>
        <div className='flex items-center gap-3 '>
          <hr className='w-16 h-1 bg-blue-700' />
          <h1 className=' text-xl text-gray-500'> Our Courses</h1>
        </div>
        <h1 className='text-2xl md:text-3xl font-semibold'>Best selling courses</h1>
      </div>

      <div className='flex gap-4 mb-5 bg-gray-100 text-black font-bold px-4 py-2 rounded-full' >
        <div className='items-center'>
          <Link>
            <button className='bg-white text-black font-bold px-4 py-2 rounded-full' >UI/UX Design</button>
          </Link>
        </div>
        <div className='items-center'>
          <Link>
            <button className=' text-black font-bold px-4 py-2 rounded-full' >Web Development</button>
          </Link>
        </div>
        <div className='items-center'>
          <Link>
            <button className='text-black font-bold px-4 py-2 rounded-full' >Data Science</button>
          </Link>
        </div>

      </div>


      <div className='md:w-full md:flex gap-6 h-full borde'>

        {/* OUR COURSES CARDS */}
        <div className='md:w-1/3 h-full mb-5 md:mb-0 flex flex-col justify-between gap-4 p-6 rounded-xl borde shadow-xl '>
          <div className='w-ful mb-5 h- md:mb-0 borde'>
            <img
              src={Computer}
              alt="computer"
              className="w-full rounded-lg"
              width=""
              height=""
            />
          </div>
          <p className='text-blue-700 font-bold'>Computer Basics </p>
          <div className='flex justify-between borde'>
            <h1 className='text-black font-extrabold text-3xl md:text-2xl '>Computer Proficiency</h1>
            <img src={ArrowUpRight} alt="" />
          </div>
          <p className='text-black text-lg font-light'>Learn Basics of Computer Hardware and Software and Operating Systems Overview.</p>

          {/* StarRating Icon  */}
          <div className='flex items-center gap-2'>
            <h1 className='text-blue-700' >4.3</h1>
            <div className='flex gap-1'>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <h1 >(16,325)</h1>
          </div>

          <div className='flex justify-betwen items-center gap-2 borde'>
            <div>
              <img
                src={Jane}
                alt="jane"
                className=""
                width="50px"
                height="50px"
              />
            </div>
            <div className='flex-grow '>
              <h1 className='font-bold'>Jane Cooper</h1>
              <p>200 Enrolled</p>
            </div>
            <div className=''>
              <h1 className='text-blue-700 text-xl font-extrabold'>₦ 50,000</h1>
            </div>
          </div>


        </div>
        <div className='md:w-1/3 h-full mb-5 md:mb-0 flex flex-col justify-between gap-4 p-6 rounded-xl borde shadow-xl '>
          <div className='w-ful mb-5 h- md:mb-0 borde'>
            <img
              src={Data}
              alt="X"
              className="w-full rounded-lg"
              width=""
              height=""
            />
          </div>
          <p className='text-blue-700 font-bold'>Data</p>
          <div className='flex justify-between borde'>
            <h1 className='text-black font-extrabold text-3xl md:text-2xl '>Data Analysis</h1>
            <img src={ArrowUpRight} alt="" />
          </div>
          <p className='text-black text-lg font-light'>Learn Data and Information, Analysis in Decision Making.</p>
          <div className='flex items-center gap-2'>
            <h1 className='text-blue-700'>4.3</h1>
            <div className='flex gap-1'>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <h1 >(16,325)</h1>
          </div>
          <div className='flex justify-betwen items-center gap-2 borde'>
            <div>
              <img
                src={Jenny}
                alt="jane"
                className=""
                width="50px"
                height="50px"
              />
            </div>
            <div className='flex-grow '>
              <h1 className='font-bold'>Jane Cooper</h1>
              <p>200 Enrolled</p>
            </div>
            <div className=''>
              <h1 className='text-blue-700 text-xl font-extrabold'>₦ 60,000</h1>
            </div>
          </div>


        </div>
        <div className='md:w-1/3 h-full mb-5 md:mb-0 flex flex-col justify-between gap-4 p-6 rounded-xl borde shadow-xl '>
          <div className='w-ful mb-5 h- md:mb-0 borde'>
            <img
              src={Web}
              alt="X"
              className="w-full rounded-lg"
              width=""
              height=""
            />
          </div>
          <p className='text-blue-700 font-bold'>Web</p>
          <div className='flex justify-between borde'>
            <h1 className='text-black font-extrabold text-3xl md:text-2xl '>Web Design</h1>
            <img src={ArrowUpRight} alt="" />
          </div>
          <p className='text-black text-lg font-light'>Learn HTML and its Structure, Creating Web Pages with HTML.</p>
          <div className='flex items-center gap-2'>
            <h1 className='text-blue-700'>4.3</h1>
            <div className='flex gap-1'>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </div>
            <h1 >(16,325)</h1>
          </div>
          <div className='flex justify-betwen items-center gap-2 borde'>
            <div>
              <img
                src={Esther}
                alt="jane"
                className=""
                width="50px"
                height="50px"
              />
            </div>
            <div className='flex-grow '>
              <h1 className='font-bold'>Jane Cooper</h1>
              <p>200 Enrolled</p>
            </div>
            <div className=''>
              <h1 className='text-blue-700 text-xl font-extrabold'>₦ 60,000</h1>
            </div>
          </div>


        </div>
      </div>
      <div className='items-center'>
        <Link to="/courses-overview">
          <button className='border bg-blue-700 flex gap-2 items-center text-white font-bold px-4 py-2 md:mt-11 rounded-xl' >View All Class
            <svg width="20" height="20" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_42_1913)">
                <path d="M4.60645 14.4822H23.3298" stroke="white" stroke-width="2.2695" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.6702 6.8226L23.3297 14.4822L15.6702 22.1418" stroke="white" stroke-width="2.2695" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_42_1913">
                  <rect width="27.234" height="27.234" fill="white" transform="translate(0.351074 0.865143)" />
                </clipPath>
              </defs>
            </svg>

          </button>
        </Link>

      </div>

    </div>
  )
}

export default OurCourses