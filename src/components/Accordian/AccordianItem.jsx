import React from 'react'

const AccordianItem = ({title, body, isOpen, setOpen}) => {
  return (
      <div className='w-[50%] m-auto border border-black'>
          <div className='bg-gray-300 p-2 flex justify-between cursor-pointer' onClick={() => setOpen(!isOpen)}>
              <span>{title}</span>
              <span>⬇️</span>
          </div>
          {isOpen && <div>
              {body}
          </div>}
    </div>
  )
}

export default AccordianItem;