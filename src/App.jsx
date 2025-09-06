import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import TopCard from './component/TopCard'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Home/>
      <TopCard/>
      <Footer/>
    </div>
  )
}

export default App
