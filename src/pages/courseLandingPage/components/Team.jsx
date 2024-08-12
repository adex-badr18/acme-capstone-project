import { TeamCards } from "../utility/Data"


const Team = () => {
    return (
        <div className="text-center px-[127px]  mt-20">
            <p className="mb-3 font-semibold text-[#1B40B3] ">Tutors</p>
            <h3 className="mb-5 text-4xl font-semibold">Meet the Heroes</h3>
            <p className="text-[#667085]">On Weekend UX, instructors from all over the world instruct millions of students. <br /> We offer the knowledge and abilities.</p>

            <div className="flex gap-4 mt-10 justify-between">
                {
                    TeamCards.map((card) => (
                        <div className="p-[18px]   bg-[#F9FAFB] w-full  grid gap-4" key={card.id}>
                            <div className="">
                                <img className="w-20 h-20 mx-auto mb-[20px]" src={card.passport} alt="" />
                                <p className="text-[#101828] text-lg">{card.name}</p>
                                <p className="text-[#1B40B3] mb-2">{card.role}</p>
                                <p className="text-[#667085]">{card.desc}</p>
                            </div>
                            <div className="flex text-[#98A2B3] gap-4 justify-center items-center">
                                {
                                    card.socials.map((handle) => (<>{handle}</>))
                                }

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team