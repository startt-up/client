import React from 'react'

const Card = ({heading , image , text}) => {
  return (
    <div className='h-full w-4/5 md:w-full p-2 rounded-md bg-white shadow-lg border-1 border-gray-300'>
      <p className='text-2xl font-medium text-center mt-6'>{heading}</p>
      <p className='w-full flex justify-center mt-6'>
        <img src={"./" + image} alt='...' className='w-20 h-20 object-contain mb-4' />
      </p>
      <p className='px-5 text-center my-6'>
        {text}
      </p>
    </div>
  )
}

export default Card
