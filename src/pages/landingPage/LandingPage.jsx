import React from 'react'
import LandingPageHero from "./components/landingPageHero";
import AboutUs from "./components/aboutUs";
import  OurService from "./components/ourService";
import HolidayBanner from "./components/holiddayBanner";
import WhyChooseUs from "./components/whyChooseUs";
import Testimonial from "./components/testimonial";
import BlogWidget from "./components/blog";


const LandingPage = () => (
  <div>
    <LandingPageHero />
    <AboutUs />
    <OurService />
    <HolidayBanner />
    <WhyChooseUs />
    <Testimonial />
    <BlogWidget />

  </div>

)

export default LandingPage