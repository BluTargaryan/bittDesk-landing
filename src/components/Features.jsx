import React from 'react'
import Feature from './Feature'

import CompSupport from '../assets/compsupport.png'
import Secure from '../assets/secure.png'
import UserFriendly from '../assets/userfriendly.png'

const Features = () => {
  return (
    <section className='py-24 px-8 flex flex-col gap-20 items-center'>
         <h1 className='text-4xl font-semibold'>Features</h1>

         <div className='flex gap-16 items-center justify-center'>
    <Feature 
    image={UserFriendly}
    title='User-Friendly Interface'
    text='Navigate our platform with ease, thanks to a clean and intuitive design.'/>
    <Feature 
    image={CompSupport}
    title='Comprehensive IT Support'
    text='Get expert tools you can use to solve a wide variety of tech issues, anytime.'/>
    <Feature 
    image={Secure}
    title='Secure and Reliable'
    text='Sensitive information is well secured, thanks to robust security protocols implemented.'/>

         </div>
    </section>
  )
}

export default Features