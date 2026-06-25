import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import Problem from '../components/sections/Problem'
import HowItWorks from '../components/sections/HowItWorks'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks/>
    </div>
  )
}

export default LandingPage