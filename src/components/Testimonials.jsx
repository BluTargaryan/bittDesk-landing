import React from 'react'
import Testimony from './Testimony'

const Testimonials = () => {
  return (
    <section className='py-24 px-8 flex flex-col gap-20 items-center justify-center'>
        <h1 className='text-4xl font-semibold'>Testimonials</h1>

        <div className='flex gap-16 items-center justify-center'>
            <Testimony 
            text="BittDesk has been a game-changer for my small business. The support is top-notch and it's completely free." 
            person='John Doe'/>
            <Testimony 
            text="I love how easy it is to get help whenever I need it. It is very accessible and covers a lot of issues." 
            person='Sarah Moe'/>
            <Testimony 
            text="The best part about BittDesk is that it’s backed by TheITApprentice.com, so I know it's a service I can trust." 
            person='Alex Toe'/>
        </div>
    </section>
  )
}

export default Testimonials