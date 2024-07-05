import React from 'react'
import Button from './Button'
import ButtonOutlined from './ButtonOutlined'
import Facebook from '../assets/Facebook.png'
import TwitterX from '../assets/TwitterX.png'
import LinkedIn from '../assets/LinkedIn.png'

const Footer = () => {
  return (
    <footer className='w-full h-52 bg-secondary flex flex-col gap-8 px-8 justify-center text-primary font-montserrat'>
 <div className='flex items-center justify-between'>
 <div className='flex gap-6'>
<a href="#" className='border-b-2 text-2xl'>Privacy Policy</a>
<a href="#" className='border-b-2 text-2xl'>Terms of Service</a>


 </div>
 <div className='flex gap-2'>
<a href="#"> <img className='h-11 w-auto' src={Facebook} alt='facebook' /></a>
<a href="#"> <img className='h-11 w-auto' src={TwitterX} alt='TwitterX' /></a>
<a href="#"> <img className='h-11 w-auto' src={LinkedIn} alt='LinkedIn' /></a>
<ButtonOutlined />
</div>

 </div>

 <p className='text-2xl'>© 2024 TheITApprentice. All rights reserved.</p>
    </footer>
  )
}

export default Footer