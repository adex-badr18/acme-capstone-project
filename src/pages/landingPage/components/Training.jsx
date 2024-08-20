
import trading from "../assets/trading.png"
const Training = () => {
    return (
        <div className="px-padding-inline my-[90px]">
            <div className="flex items-center text-[#1A2434] gap-[70px]">
                <img className="h-[550px]" src={trading} alt="" />
                <div>
                    <div className="flex gap-4 mb-10 items-center ">
                        <span className="inline-block h-2 w-16 bg-[#1B40B3]"></span>
                        <p className="text-lg text-[#1A2434]">About us</p>
                    </div>
                    <h2 className="text-[46px] mb-6 font-semibold">Training and consulting company</h2>
                    <p className="leading-[2] text-lg">At ACME Software Lab, we are passionate about empowering individuals and organizations through innovative training and consulting services. As a leading provider in the tech industry, our mission is to bridge the gap between technology and talent, helping our clients achieve their fullest potential.</p>

                    <button className="bg-[#1B40B3] mx-auto text-white p-4 rounded-md w-fit mt-[64px]">Learn More</button>

                </div>



            </div>
            <div className="mt-20 flex justify-between ">

                <div className="grid text-center items-start content-center">
                    <h1 className="text-6xl font-bold">5 <span className="text-[#1B40B3] ">+</span></h1>
                    <p>Years of <br /> experience</p>
                </div>
                <div className="grid text-center items-start">
                    <h1 className="text-6xl font-bold">1 <span className="text-[#1B40B3] ">k+</span></h1>
                    <p>clients<br />worldwide </p>
                </div>
                <div className="grid text-center items-start ">
                    <h1 className="text-6xl text-[#1B40B3] font-bold">20+</h1>
                    <p>courses</p>
                </div>
                <div className="grid text-center items-start">
                    <h1 className="text-6xl text-[#1B40B3] font-bold">100% </h1>
                    <p>courses</p>
                </div>

            </div>
        </div>
    )
}

export default Training