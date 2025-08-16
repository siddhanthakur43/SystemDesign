import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Pagination = () => {
    const [current, setCurrent] = useState(0);
    const [products, setProducts] = useState(null);
    const [total, setTotal] = useState(0);
    const [cache] = useState({});
    const LIMIT = 20;

    const noOfPage = Math.ceil(total/LIMIT)

    useEffect(() => {
        fetchData();
    }, [current]);

    const fetchData = async () => {
        if (cache[current * LIMIT]) {
            setProducts(cache[current * LIMIT])
        } else {
        const data = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${current * LIMIT}&select=title,price,description,discount,thumbnail`)
        const json = await data.json();
        setTotal(json.total);
        setProducts(json.products);
        cache[current * LIMIT] = json.products;
        console.log(json);}
    }
  return (
      <div>
          <div className='flex flex-wrap'>
              {
                  products?.map((item) => <ProductCard key={item.id} {...item} />)
              }
          </div>
          <div className='flex justify-center'>
              {current > 0
                  && <span className='cursor-pointer m-2 p-2' onClick={() => setCurrent(current - 1)}>Previous</span>
              }
              {
                  [...Array(noOfPage).keys()].map((pn) => {
                      return (
                          <span className={`m-2 p-2 cursor-pointer ${current === pn && `font-bold underline`}`} key={pn} onClick={() => setCurrent(pn)}>
                              {pn + 1}
                          </span>)
                  })
              }

              {current <noOfPage -1 && <span className='cursor-pointer m-2 p-2' onClick={() => setCurrent(current + 1)}>Next</span>
              }
          </div>
    </div>
  )
}

export default Pagination