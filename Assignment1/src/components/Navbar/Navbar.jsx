import React , { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className='p-3 z-50 lg:py-9 fixed w-full mt-0'>
        <div className="parent ps-24 flex justify-between flex-wrap lg:flex-nowrap">
          <div className="home">
            <Link to="" className='text-xl md:text-3xl font-bold text-white'>START FRAMEWORK</Link>
          </div>
          <button className='lg:hidden text-black text-3xl border rounded-md py-1 px-4 border-black mx-24' onClick={toggleMenu}>
            ☰
          </button>
          <div className={`lg:flex lg:items-center lg:static pe-24 w-full lg:w-auto font-bold transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col lg:flex-row w-full lg:w-auto items-center lg:space-x-6'>
              <li className='w-full lg:py-0'><NavLink to="about" className='text-white block py-2'>ABOUT</NavLink></li>
              <li className='w-full lg:py-0'><NavLink to="portfolio" className='text-white block py-2'>PORTFOLIO</NavLink></li>
              <li className='w-full lg:py-0'><NavLink to="contact" className='text-white block py-2'>CONTACT</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}