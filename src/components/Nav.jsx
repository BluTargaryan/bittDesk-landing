import React from 'react'
import ButtonOutlined from './ButtonOutlined'

const Nav = () => {
  return (
    <nav className='w-full h-24 bg-secondary flex px-8 justify-between items-center text-primary font-montserrat'>
     <span className='text-4xl font-bold'>BittDesk</span>
     <ul className='flex gap-6 text-xl'>
<li>Features</li>
<li>Testimonials</li>
<li>Pricing</li>
<li>Donations</li>
<li>Partnerships</li>
<li>FAQs</li>
<li>Contact Us</li>
     </ul>
     <ButtonOutlined />
    </nav>
  )
}

export default Nav