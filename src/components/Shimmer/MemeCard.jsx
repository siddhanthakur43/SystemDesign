import React from 'react'

const MemeCard = ({meme}) => {
  return (
      <div className='p-5 m-5 border border-black rounded-lg' >
          <img className='w-64 h-64' src={meme.url} />
          <p>{meme.author}</p>
    </div>
  )
}

export default MemeCard;
