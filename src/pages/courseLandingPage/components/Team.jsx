import TeamCard from "./TeamCard"
import { TeamCards } from "../utility/Data"


const Team = () => {
    return (
        <div className="text-center p-4 md:px-[127px]  mt-20">
            <p className="mb-3 font-semibold text-[#1B40B3] ">Tutors</p>
            <h3 className="mb-5 text-4xl font-semibold">Meet the Heroes</h3>
            <p className="text-[#667085]">On Weekend UX, instructors from all over the world instruct millions of students. <br /> We offer the knowledge and abilities.</p>

            <div className="flex flex-col md:flex-row gap-4 mt-10 justify-between">
                {
                    TeamCards.map((card, index) => (

                        <TeamCard key={index} card={card} />
                    ))
                }


            </div>
        </div>
    )
}

export default Team