import React from 'react'
import Feature from './Feature'

import Charity from '../assets/charity.png'
import Crowdfund from '../assets/crowdfunding.png'
import Button from './Button'

const Crowdfunding = () => {
  return (
    <section className="py-24 px-8 flex flex-col gap-20 items-center">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-4xl font-semibold">Crowdfunding</h1>
        <p className="text-xl">Join us in making a difference.</p>
      </div>

      <p className="text-2xl w-4/5 text-center">
        Your contributions ensure that our developers are fairly compensated and
        enable us to continue providing exceptional service.
      </p>
      <div className="flex gap-16 items-center justify-center">
        <Feature
          image={Crowdfund}
          title="Crowdfunding"
          text="We’re open to crowdfunding initiatives to further enhance our services."
        />
        <Feature
          image={Charity}
          title="Charity Partnerships"
          text="We collaborate with charities to extend our reach and impact."
        />
      </div>

      <div className="flex gap-20 items-end justify-center">
        <div className="flex flex-col gap-5 w-5/12 items-center">
         <p className='font-medium text-center'>Interested in partnering with us? Reach out to us using the button below and let’s make a difference together.</p>
         <Button 
         width='w-80'
         content='Contact us'
         />
        </div>

        <div className="flex flex-col gap-5 w-5/12 items-center">
         <p className='font-medium text-center'>For more information on partnerships, visit TheITApprentice.com.</p>
         <Button 
         width='w-80'
         content='Go to TheITApprentice'
         />
        </div>
      </div>
    </section>
  );
}

export default Crowdfunding