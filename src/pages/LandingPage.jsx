import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import Problem from '../components/sections/Problem'
import HowItWorks from '../components/sections/HowItWorks'
import Categories from '../components/sections/Categories'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks/>
      <Categories/>
    </div>
  )
}

export default LandingPage