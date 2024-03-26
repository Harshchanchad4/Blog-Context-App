import { useEffect, useState } from 'react'
import Pagination from './Components/Pagination'
import Blog from './Components/Blog'
import Header from './Components/Header'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

function App() {
  const [count, setCount] = useState(0)
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  } , [])


  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header />
      <Blog />
      <Pagination />
    </div>
  )
}

export default App
