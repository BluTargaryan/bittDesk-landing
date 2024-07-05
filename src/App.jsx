import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Crowdfunding from './components/Crowdfunding'
import FAQ from './components/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary font-montserrat'>
    <Hero />
    <Features />
    <Testimonials />
    <Pricing />
    <Crowdfunding />
    </div>
  )
}

export default App
