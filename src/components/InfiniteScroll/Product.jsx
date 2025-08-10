import React from 'react'

const Product = ({item}) => {
  return (
      <div className='border border-black m-5 p-5'>
          <img className='w-64 h-64' src={item?.thumbnail} />
          <p>{item?.title}</p>
    </div>
  )
}

export default Product