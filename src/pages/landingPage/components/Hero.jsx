import landingPageCover from '../assets/landingPageCover.png'
import IconContainer from '../assets/IconContainer.svg'

const Hero = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),  url("${landingPageCover}")`
        }} className="grid text-center relative place-content-center h-[499px]">

            <div className="bg-white mb-6  mx-auto items-center text-3xl rounded-lg w-fit  p-4 flex gap-3">
                <img

                    src={IconContainer} alt="" />
                <h1 className='font-bold'>
                    <span className="text-[##1B40B3]">Where</span> Tech Dreams Take Flight
                </h1>
            </div>
            <p className="text-white text-center max-w-[506px]">At Acme, we create stunning, responsive websites that are tailored to meet your business goals.</p>
            <button className="bg-[#1B40B3] mx-auto text-white p-4 rounded-md w-fit mt-[64px]">Learn More</button>
            <div className="gap-3 flex items-center absolute bottom-4 left-1/2 -translate-x-1/2 justify-center">
                <div className="h-4 w-12 rounded-full bg-[#1B40B3] "></div>
                <div className="h-4 w-4 rounded-full bg-white "></div>
                <div className="h-4 w-4 rounded-full bg-white "></div>
                <div className="h-4 w-4 rounded-full bg-white "></div>


            </div>
        </div>
    )
}

export default Hero