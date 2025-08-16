import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div>
          <ul>
              <li><Link to='/shimmer-ui'>Shimmer UI</Link></li>
              <li><Link to='/infinite-scroll'>Infinite Scroll</Link></li>
              <li><Link to='/search-bar'>Search Bar</Link></li>
              <li><Link to='/pagination'>Pagination</Link></li>
          </ul>
    </div>
  )
}

export default Home;
