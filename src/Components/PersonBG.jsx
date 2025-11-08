import React from 'react'

const PersonBG = ({ bg, image, name, namebg, nameflip = false }) => {
  return (
    <div
      className={`w-50 h-50 bg-[${bg}] rounded-lg border-1 border-purple-300 relative flex justify-center`}
    >
      <img src={image} alt='...' className='absolute bottom-0 w-50' />
      <div
        className={`p-3 rounded-xl bg-${namebg} text-white font-medium absolute -bottom-5 ${
          nameflip ? '-left-10' : '-right-10'
        }`}
      >
        {name}
      </div>
    </div>
  )
}

export default PersonBG
