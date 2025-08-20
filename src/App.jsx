import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Memes from './components/Shimmer/Memes'
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll'
import SearchBar from './components/SearchBar/SearchBar'
import Pagination from './components/Pagination/Pagination'
import MultiLanguage from './components/MultiLanguage/MultiLanguage'
import Accordian from './components/Accordian/Accordian'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shimmer-ui' element={<Memes />} />
          <Route path='/infinite-scroll' element={<InfiniteScroll />} />
          <Route path='/search-bar' element={<SearchBar />} />
          <Route path='/pagination' element={<Pagination />} />
          <Route path='/multi-language' element={<MultiLanguage />} />
          <Route path='/accordian' element={<Accordian />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
