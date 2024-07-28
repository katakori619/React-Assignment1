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
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import {createBrowserRouter, RouterProvider , createHashRouter} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  let routers = createHashRouter([
    {path:'' , element: <Layout/>  , children: [
      {index: true , element: <Home/>},
      {path: 'About' , element: <About/>},
      {path:'portfolio' , element: <Portfolio/> },
      {path:'contact' , element: <Contact/>},
      {path:'*' , element: <NotFound/>}
    ]}
])
  return (
    <>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Portfolio/> */}
      {/* <NotFound/>
      <Footer/> */}
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
