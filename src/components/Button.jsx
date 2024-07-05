import React from 'react'

const Button = ({content, width}) => {
  return (
    <button className={`flex items-center justify-center bg-secondary rounded-full  ${width} h-11 text-primary text-xl`}>{content}</button>
  )
}

export default Button