import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
export default function Home() {
  return (
    <>
      <div className="parent2 text-white flex justify-center items-center py-24">
        <div className="child w-1/3 flex flex-col justify-center items-center">
          <div className="image w-1/2 flex justify-center items-center">
            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className='w-full' alt="" />
          </div>
          <div className="caption mt-9">
            <p className='text-4xl font-bold mb-3'>START FRAMEWORK</p>
            <div className="figure my-5 flex justify-center items-center">
              <div className="line ms-2"></div>
              <i className='fa-solid fa-star mx-2'></i>
              <div className="line"></div>
            </div>
            <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  )
}