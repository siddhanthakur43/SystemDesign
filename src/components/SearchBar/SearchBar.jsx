import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [result, setResults] = useState([]);

    useEffect(() => {
        fetchResult();
    }, [searchText])

    const onOptionClick = (value) => {
        setSearchText(value)
    }


    const fetchResult = async () => {
        const result = await fetch(`https://www.googleapis.com/customsearch/v1?key=${REACT_APP_GOOGLE_API_KEY}&cx=${REACT_APP_GOOGLE_CX_ID}&q=${encodeURIComponent(searchText)}`);
        const json = await result.json();
        setResults(json.items)
        console.log(json, 'json');
    }

  return (
      <div className='m-5'>
          <p className=''>Custom Search Using Google API</p>
          <input
              className='border border-black p-3 w-96 rounded-lg'
              type='text'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
          />
          {result?.length > 0 && <ul className='border border-black w-96'>
              { result?.map((item, index) => < li onClick={() => onOptionClick(item.title)} key={index}> {item.title}</li>
              )}
          </ul>}
    </div>
  )
}

export default SearchBar