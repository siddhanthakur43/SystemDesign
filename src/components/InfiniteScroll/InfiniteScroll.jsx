import React, { useEffect, useState } from 'react'
import Product from './Product';
import Shimmer from './Shimmer';

const InfiniteScroll = () => {
    const [products, setProducts] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);

         const handleInfiniteScroll = () => {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight -10) {
            fetchData();
        }
    }

    useEffect(() => {
        fetchData();
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => window.removeEventListener('scroll', handleInfiniteScroll);
    }, []);


    const fetchData = async () => {
        setShowShimmer(true);
        const data = await fetch('https://dummyjson.com/products?limit=50');
        const json = await data.json();
                setShowShimmer(false);
        setProducts((products) => [...products, ...json.products]);
    }

  return (
      <div className='flex flex-wrap'>
          {products?.map((item, i) => (
              <Product key={i} item={item} />
        ))}
          {showShimmer && <Shimmer />}
      </div>
  )
}

export default InfiniteScroll