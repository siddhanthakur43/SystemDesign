import React from 'react'

const ProductCard = ({id, title, price, thumbnail, description}) => {
  return (
      <div className='border border-solid border-black m-4 p-4'>
          <div>{id}</div>
          <img className='h-60 w-60' src={thumbnail} />
          <div className='font-bold w-60'>{title}</div>
          <div>${price}</div>
          <div className='w-60'>{description}</div>
    </div>
  )
}

export default ProductCard;
