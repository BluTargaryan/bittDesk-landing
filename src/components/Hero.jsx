import React from 'react'
import Button from './Button';
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <section id='hero' className="py-24 px-8 flex justify-between items-center">
      <div className="w-2/5 flex flex-col gap-12">
        <h1 className='text-4xl font-semibold'>Experience the Future of Free IT Support</h1>

        <div className='flex flex-col gap-5 items-start'>
<p className='text-2xl'>
    BittDesk is a revolutionary product offering unparalleled IT support services, completely free. Backed by TheITApprentice.com, our mission is to make quality tech support accessible to everyone.</p>
    <Button 
    content='Get BittDesk now!'
    width='w-64'
    />
        </div>
        
      </div>

      <img src={HeroImage} 
      alt="3d image of a man representing assurance of services" 
      className='w-[45%] h-auto'
      />
    </section>
  );
}

export default Hero