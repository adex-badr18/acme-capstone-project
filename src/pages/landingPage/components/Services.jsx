import React from 'react'

const Services = () => {
    return (
        <div className='px-padding-inline relative py-20 '>
            <h2 className='text-[#1B40B3] font-bold text-center text-2xl mb-8'>
                Our Services
            </h2>
            <p className='text-center' >Empowering your future with cutting-edge tech solutions and personalized expertise.</p>
            <div className='flex gap-4 mt-[70px]'>
                <div className='p-6  grid gap-4  rounded-lg text-white bg-[#1B40B3]'>
                    <div>
                        <img src="" alt="" />
                        <h3>Website Development</h3>
                    </div>
                    <p>
                        we create dynamic, user-friendly <br /> websites tailored to your business <br /> needs.
                    </p>

                    <button className='text-white w-fit'  >Learn More &gt;</button>
                </div>
                <div className='p-6  grid gap-4  rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] '>
                    <div>
                        <img src="" alt="" />
                        <h3>Website Development</h3>
                    </div>
                    <p>
                        we create dynamic, user-friendly <br /> websites tailored to your business <br /> needs.
                    </p>

                    <button className='text-[#1B40B3] w-fit font-bold '>Learn More &gt;</button>
                </div>
                <div className='p-6 grid gap-4 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] '>
                    <div>
                        <img src="" alt="" />
                        <h3>Website Development</h3>
                    </div>
                    <p>
                        we create dynamic, user-friendly <br /> websites tailored to your business <br /> needs.
                    </p>

                    <button className='text-[#1B40B3] w-fit font-bold '>Learn More &gt;</button>
                </div>
                <div className='p-6 grid gap-4 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] '>
                    <div>
                        <img src="" alt="" />
                        <h3>Website Development</h3>
                    </div>
                    <p>
                        we create dynamic, user-friendly <br /> websites tailored to your business <br /> needs.
                    </p>

                    <button className='text-[#1B40B3] w-fit font-bold '>Learn More &gt;</button>
                </div>
            </div>

            <div className="gap-3 flex items-center absolute bottom-4 left-1/2 -translate-x-1/2 justify-center">
                <div className="h-4 w-12 rounded-full bg-[#1B40B3] "></div>
                <div className="h-4 w-4 rounded-full bg-gray-300 "></div>
                <div className="h-4 w-4 rounded-full bg-gray-300 "></div>
                <div className="h-4 w-4 rounded-full bg-gray-300 "></div>


            </div>
        </div>
    )
}

export default Services