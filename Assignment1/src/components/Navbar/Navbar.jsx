import React , { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className='p-3 lg:py-9 fixed w-full mt-0'>
        <div className="parent ps-24 flex justify-between flex-wrap lg:flex-nowrap">
          <div className="home">
            <a href="" className='text-xl md:text-3xl font-bold text-white'>START FRAMEWORK</a>
          </div>
          <button className='lg:hidden text-black text-3xl border rounded-md py-1 px-4 border-black mx-24' onClick={toggleMenu}>
            ☰
          </button>
          <div className={`lg:flex lg:items-center lg:static pe-24 w-full lg:w-auto font-bold transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col lg:flex-row w-full lg:w-auto items-center lg:space-x-6'>
              <li className='w-full'><a href="#" className='text-white block py-2 lg:py-0 w-full'>ABOUT</a></li>
              <li className='w-full'><a href="#" className='text-white block py-2 lg:py-0 w-full'>PORTFOLIO</a></li>
              <li className='w-full'><a href="#" className='text-white block py-2 lg:py-0 w-full'>CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}