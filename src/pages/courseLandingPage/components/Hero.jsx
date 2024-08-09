import datascience from "../assets/datascience.svg"
import briefcase from "../assets/Briefcase.svg"
import duolingo from "../assets/duolingo.svg"
import idea from "../assets/idea.svg"
import heroimg from "../assets/heroimg.png"
import leftcircle from "../assets/left-circle-bg.svg"
import backgroundCircle from "../assets/backgroundCircle.svg"
import UserTesting from "../assets/UserTesting.svg"
import MagicLeap from "../assets/MagicLeap.svg"
import CodeCov from "../assets/CodeCov.svg"

const Collaboration = () => {
    return (

        <p className={`text-[#1B40B3]  text-[24px] md:text-[30px] leading-[1] font-[800]`}>250+ <br />
            <span className={`font-[300] text-[#101828] text-[18px] md:text-[25px]`}>Collaboration</span>
        </p>

    )
}

const listIcon = [duolingo, CodeCov, UserTesting, MagicLeap]




const Hero = () => {
    return (
        <div className="bg-[rgba(27,64,179,2%)] relative pt-8 pb-16">

            <div className='flex flex-col items-center justify-between px-4 md:flex-row md:px-[127px] md:pb-[47px]'>
                <div className="radial-gradient">
                </div>

                <div className="w-full relative">
                    <img className="absolute md:w-[414px] md:h-[414px] -left-[127px] -top-[17px] " src={leftcircle} alt="" />
                    <h1 className='text-[#101828] text-4xl  md:text-[64px] font-[800] leading-[1.5] pb-5'>  Elevate Your <span className='text-[#1B40B3]'> Tech <br /> Skills</span> at ACME  </h1>
                    <p className='max-w-[487px] pb-8 md:pb-[50px]'>Our comprehensive training programs are designed to equip you with the skills needed to thrive in the digital age.</p>
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-[34px]">
                        <div className="flex  gap-[10px] items-center">
                            <img src={datascience} alt="datascience logo" />
                            <p>Data Science</p>
                        </div>
                        <div className="flex gap-[10px]  items-center">
                            <img src={briefcase} alt="briefcase logo" />
                            <p>Web Development</p>
                        </div>
                        <div className="flex gap-[10px]  items-center ">
                            <img src={idea} alt="briefcase logo" />
                            <p>Creative Design</p>
                        </div>
                    </div>
                </div>
                <div className="w-full relative">
                    <img className="absolute -z-10 -bottom-[226px] -right-[150px]" src={backgroundCircle} alt="" />

                    <img src={heroimg} alt="" />

                </div>

            </div>

            <div className="inline-block absolute bottom-[140px] left-[360px] rounded-full bg-[rgba(27,65,179,0.6)] h-[22px] w-[22px]"></div>
            <div className="overflow-hidden w-full whitespace-nowrap">
                <div className="flex gap-8 animate-[infiniteScroll_3s_linear_infinite]  items-center mt-[50px] md:mt-[126px]">
                    <Collaboration />
                    {
                        listIcon.map((items, index) => (
                            <img className=" h-7 md:h-9" key={index} src={items} alt="" />
                        ))

                    }
                    <Collaboration />

                    {
                        listIcon.map((items, index) => (
                            <img className="  h-7 md:h-9" key={index} src={items} alt="" />
                        ))

                    }




                </div>
            </div>

        </div >

    )
}

export default Hero