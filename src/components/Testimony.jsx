import React from 'react'

const Testimony = ({text, person}) => {
  return (
    <div className='flex flex-col w-80 items-center justify-between text-center gap-4'>
    <p className='font-medium text-2xl'>{text}</p>
    <p className='font-bold'>{person}</p>
    </div>
  )
}

export default Testimony