import React from 'react'

const Shimmer = () => {
    return Array(20).fill(0).map((n, i) => (
        <div key={i} className='border border-black p-5 m-5'>
            <div className='w-64 h-64 bg-gray-300'> </div>
          <p>hello</p>
        </div>
    ))
}

export default Shimmer;
