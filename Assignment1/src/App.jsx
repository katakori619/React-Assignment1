import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import NotFound from './components/NotFound/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Portfolio/> */}
      <NotFound/>
      <Footer/>
    </>
  )
}

export default App
