import { useState } from 'react'

const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='p-1 rounded-2xl bg-[#E4D6FF] shadow-md shadow-black'>
      <button
        onClick={() => setOpen(!open)}
        className='w-full flex justify-between items-center p-4 text-left font-bold text-base md:text-xl cursor-pointer'
      >
        <span className=' font-medium'>{title}</span>
        <span
          className='transition-transform duration-300'
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          <img src="./Vector2.png" alt="..." className='w-8 bg-[#7940E9] p-2 py-3 rounded-full'/>
        </span>
      </button>

      {open && <div className='p-4 text-gray-800 font-medium'>{content}</div>}
    </div>
  )
}

export default Accordion
