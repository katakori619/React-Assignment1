import React , { useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <>
      <div className="parent2 text-white flex justify-center items-center py-16">
        <div className="child flex flex-col justify-center items-center mt-28">
          <div className="image flex justify-center items-center">
            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className='w-full' alt="" />
          </div>
          <div className="caption mt-9">
            <p className='text-4xl font-bold mb-3 text-center'>START FRAMEWORK</p>
            <div className="figure my-5 flex justify-center items-center">
              <div className="line ms-2"></div>
              <i className='fa-solid fa-star mx-3'></i>
              <div className="line"></div>
            </div>
            <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  )
}