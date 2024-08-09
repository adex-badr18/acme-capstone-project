
import Star from "../utility/Star"
import { IoMdArrowUp } from "react-icons/io";
import { Link } from "react-router-dom"
import { programCards } from "../utility/Data"



const Programs = () => {

    return (
        <div className="mt-[70px] px-4 md:px-[127px] ">
            <p className="text-[#1B40B3] font-bold mb-3 ">Explore Programs</p>
            <h2 className="mb-5 text-[#101828] font-bold text-[36px] ">Our Most Popular Courses</h2>
            <p className="text-[#667085] ">Join our famous courses, the knowledge provided will definitely be useful for you.</p>

            <div className="flex flex-col md:flex-row gap-6 mt-10">
                {
                    programCards.map((card) => (
                        <div key={card.id} className="p-6 rounded-lg w-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
                            <div className="mb-8">
                                <img className="w-full" src={card.image} alt="" />
                            </div>
                            <p className="text-[#1B40B3] font-semibold mb-3">{card.type}</p>
                            <div className="flex justify-between mb-3">
                                <h3 className="text-2xl  font-semibold text-[#101828]">{card.title}</h3>
                                <Link>
                                    <IoMdArrowUp className="text-2xl text-[#101828] rotate-45" />

                                </Link>
                            </div>

                            <p className="text-[#667085] mb-3">{card.info}</p>

                            <div className="flex text-sm items-center gap-2 mb-8">
                                <span className="text-[#1B40B3]">{card.rating}</span>
                                <span className="flex text-base gap-1 text-[#FF9B26]">
                                    <Star
                                        num={card.star}
                                    />
                                </span>
                                <span className="text-[#969696]">({card.vote})</span>
                            </div>

                            <div className="flex justify-between">

                                <div className="flex gap-3 items-center">
                                    <div className="img">
                                        <img src={card.passport} alt="" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-semibold text-[#101828]">{card.teacher}</p>
                                        <p className="text-[#667085]">{card.enrolled} Enrolled</p>
                                    </div>
                                </div>

                                <div className="text-[26px] font-bold text-[#1B40B3]">
                                    <del className="decoration-double">N</del>   {card.fee}
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className="flex items-center p-10 gap-4 h-10 justify-center">

                <div className="w-12 inline-block h-3 rounded-xl bg-[#1B40B3]"></div>
                <div className="w-3 inline-block  h-3 rounded-xl bg-[#D9D9D9]"></div>
                <div className="w-3 inline-block  h-3 rounded-xl bg-[#D9D9D9]"></div>
            </div>

            <div className="grid place-content-center">
                <Link className="border rounded-lg px-4 py-2.5 bg-[#F9FAFB] border-[#D0D5DD] text-[#101828] font-semibold">
                    Explore All Program
                </Link>
            </div>
        </div>
    )
}

export default Programs