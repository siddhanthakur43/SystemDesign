import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Memes from './components/Shimmer/Memes'
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shimmer-ui' element={<Memes />} />
          <Route path='/infinite-scroll' element={<InfiniteScroll />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
