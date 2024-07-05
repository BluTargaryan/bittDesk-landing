import React from 'react'
import NoCost from '../assets/nocost.png'

const Pricing = () => {
  return (
    <section className="py-24 px-8 flex items-center justify-between">
      <div className="w-2/5 flex flex-col gap-14">
        <h1 className="text-4xl font-semibold">Pricing</h1>
        <div className='flex flex-col gap-4'>
        <p className='text-3xl'>BittDesk is completely free!</p>
        <h2 className='text-3xl font-semibold'>Why ?</h2>
        <p className='text-2xl'>We believe that everyone deserves access to quality IT support, regardless of their financial situation. BittDesk is committed to staying free for all users.</p>
        </div>
      </div>

      <img src={NoCost} 
      alt="3d image of a man representing assurance of services" 
      className='w-[45%] h-auto'
      />
    </section>
  );
}

export default Pricing