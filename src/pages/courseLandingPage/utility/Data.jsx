import wilson from "../assets/wilson.png"
import jane from "../assets/jane.png"
import webdev from "../assets/webdev.png"
import howard from "../assets/howard.png"
import computerBasics from "../assets/computerBasics.png"
import dataAnalysis from "../assets/dataAnalysis.png"

import { FaLinkedin, FaTwitter } from "react-icons/fa"
import webb from "../assets/webb.png"
import courtney from "../assets/courtney.png"
import albert from "../assets/albert.png"
import marvin from "../assets/marvin.png"

import wong from "../assets/wong.png"
import wood from "../assets/wood.png"
import song from "../assets/song.png"

export const programCards = [
    {
        id: 1,
        type: "Computer basics ",
        title: "Computer Proficiency",
        info: "Learn Basics of Computer Hardware and Software and Operating Systems Overview. ",
        rating: 4.3,
        star: 5,
        vote: 16325,
        passport: jane,
        teacher: "Jane Cooper",
        enrolled: 200,
        fee: 50000,
        image: computerBasics
    },
    {
        id: 2,
        type: "Data",
        title: "Data Analysis",
        info: "Learn Data and Information, Analysis in Decision Making. ",
        rating: 3.9,
        star: 5,
        vote: 832,
        passport: wilson,
        teacher: "Jenny Wilson",
        enrolled: 2001,
        fee: 60000,
        image: dataAnalysis
    },
    {
        id: 3,
        type: "Design",
        title: "Web Design",
        info: "Learn HTML and its Structure, Creating Web Pages with HTML. ",
        rating: 4.2,
        star: 5,
        vote: 125,
        passport: howard,
        teacher: "Esther Howard",
        enrolled: 2001,
        fee: 60000,
        image: webdev
    },
]


export const TeamCards = [
    {
        id: 1,
        passport: webb,
        name: "Theresa Webb",
        role: "Application Support Analyst Lead",
        desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        socials: [
            <FaTwitter key={1} />,
            <FaLinkedin key={2} />,
        ]
    },
    {
        id: 2,
        passport: courtney,
        name: "Courtney Henry",
        role: "Director, Undergraduate Analytics and Planning",
        desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
        socials: [
            <FaTwitter key={1} />,
            <FaLinkedin key={2} />,
        ]
    },
    {
        id: 3,
        passport: albert,
        name: "Albert Flores",
        role: "Career Educator",
        desc: "Former PM for Linear, Lambda School, and On Deck.",
        socials: [
            <FaTwitter key={1} />,
            <FaLinkedin key={2} />,
        ]
    },
    {
        id: 4,
        passport: marvin,
        name: "Marvin McKinney",
        role: "Co-op & Internships Program & Operations Manager",
        desc: "Former frontend dev for Linear, Coinbase, and Postscript.",
        socials: [
            <FaTwitter key={1} />,
            <FaLinkedin key={2} />,
        ]
    },
]


export const Testimonial = [
    {
        id: 1,
        image: wong,
        name: "Michael Wong",
        course: "UI/UX Design Student",
        star: 1,
        rate: 4.8,
        testimony: "ACME's tech training program was incredible! The instructors were knowledgeable and approachable, making complex topics easy to understand. I gained practical skills in coding.",
    },
    {
        id: 2,
        image: song,
        name: "Avril Song",
        course: "Web Development Student",
        star: 1,
        rate: 4.8,
        testimony: "ACME's tech training program was incredible! The instructors were knowledgeable and approachable, making complex topics easy to understand. I gained practical skills in coding.",
    },
    {
        id: 3,
        image: wood,
        name: "Jeane Wood",
        course: "Data Science Student",
        star: 1,
        rate: 5,
        testimony: "ACME's tech training program was incredible! The instructors were knowledgeable and approachable, making complex topics easy to understand. I gained practical skills in coding.",
    },
]