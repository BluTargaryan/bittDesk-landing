import React from 'react'

const Feature = ({image, title, text}) => {
  return (
    <div className='w-96 h-96 shadow-lg rounded-lg flex flex-col items-center justify-center gap-6'>
        <img src={image} 
      alt="3d image of a man representing assurance of services" 
      className='h-2/5 w-auto'
      />

      <div className='flex flex-col gap-2 items-center'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='text-center w-10/12'>{text}</p>
      </div>
    </div>
  )
}

export default Feature