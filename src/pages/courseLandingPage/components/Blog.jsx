import delight from "../assets/userDelight.png"
import ux from "../assets/uxMapping.png"
import agile from "../assets/agile.png"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
const Blog = () => {
    return (
        <div className="px-4 md:px-[127px]  mt-[140px]">
            <div className="flex  items-center justify-center gap-4 mb-[18px]">
                <div className="bg-[#1B40B3] w-[72px] h-1"></div>
                <p className="text-[#1A2434]">Blog</p>
            </div>
            <h3 className=" mb-[41px] text-[40px] text-center  font-semibold text-[#1A2434]">Browse articles</h3>
            <div>
                <h4 className="text-[#101828] font-semibold mb-8 text-2xl">Our recent blogs</h4>
                <div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="grid w-full gap-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="">
                                    <img className="max-w-[310px] h-[200px]" src={delight} alt="" />
                                </div>
                                <div className="w-[246px]">
                                    <p className="font-bold mb-3 text-sm text-[#1B40B3]">November 16, 2014</p>
                                    <h5 className="text-[#101828] mb-2 font-semibold text-[18px]">Three Pillars of User Delight</h5>
                                    <p className="text-[#667085] max-w-[248px]">Delight can be experienced  viscerally, behaviourally, and reflectively. A great design is ...</p>

                                    <div className="flex gap-4 mt-6">
                                        <p className="py-1 px-[10px] text-[#C11574] text-sm rounded-full bg-[#FDF2FA] grid place-content-center  " >Research</p>
                                        <p className="py-1 px-[10px] text-[#026AA2] text-sm rounded-full bg-[#F0F9FF] grid place-content-center  ">UI/UX</p>
                                    </div>
                                </div>

                            </div>
                            <div className="flex gap-4 flex-col md:flex-row ">
                                <div className="">
                                    <img className="w-full h-[200px] max-w-320px" src={ux} alt="" />
                                </div>
                                <div className="w-[246px]">
                                    <p className="font-bold mb-3 text-sm text-[#1B40B3]">September 24, 2017</p>
                                    <h5 className="text-[#101828] mb-2 font-semibold text-[18px]">UX Mapping Methods</h5>
                                    <p className="text-[#667085] max-w-[248px]">Visual-design principles can be applied consistently throughout the process of creating a polished UX map...</p>

                                    <div className="flex gap-4 mt-6">
                                        <p className="py-1 px-[10px] text-[#C11574] text-sm  rounded-full bg-[#FDF2FA] grid place-content-center  " >Research</p>
                                        <p className="py-1 px-[10px] text-[#026AA2] text-sm  rounded-full bg-[#F0F9FF] grid place-content-center  ">UI/UX</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <div >
                                <img className="max-w-560px  h-[240px ] w-full" src={agile} alt="" />
                            </div>
                            <div>
                                <p className="font-bold mb-3 text-sm text-[#1B40B3]">March 13, 2014</p>
                                <h5 className="text-[#101828] mb-2 font-semibold text-[18px]">Three Pillars of User Delight</h5>
                                <p className="text-[#667085] ">Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. </p>

                                <div className="flex gap-4 mt-6">
                                    <p className="py-1 px-[10px] text-[#FF9B26] text-sm rounded-full bg-[#FFF9F3] grid place-content-center  " >programming</p>
                                    <p className="py-1 px-[10px] text-[#C11574] text-sm rounded-full bg-[#FDF2FA] grid place-content-center  " >Research</p>
                                    <p className="py-1 px-[10px] text-[#026AA2] text-sm rounded-full bg-[#F0F9FF] grid place-content-center  ">UI/UX</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div className="mt-[100px]">
                <Link className="flex mx-auto items-center rounded-xl justify-center max-w-[349px] h-20 bg-[#1B40B3]  gap-4 text-white ">
                    View all <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default Blog