import Blog from './components/Blog'
import Hero from './components/Hero'
import Training from './components/Training'
import Testimonials from './components/Testimonials'
import Programs from './components/Programs'
import Services from './components/Services'

const LandingPage = () => {
  return (
    <div className='  relative w-screen max-w-[1440px] mx-auto'   >
      <Hero />
      <Training />
      <Services />
      <Programs />

      <Testimonials />


      <Blog />



    </div>
  )
}

export default LandingPage