import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Memes = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const memes = await fetch('https://meme-api.com/gimme/200');
            const json = await memes.json();
            setData(json.memes);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


  return (
      <div className='flex flex-wrap'>
          {!data ?
              (<Shimmer />)
              : (data?.map((item, index) => {
                  return <div key={index} >
                      <MemeCard meme={item} />
                  </div>
              }))
          }
    </div>
  )
}

export default Memes;
