import React from 'react'

export default function Portfolio() {
  return (
    <>
      <div className="parent4 flex justify-center items-center">
        <div className="container mt-36 pb-28">
          <p className='text-4xl font-bold text-center'>PORTFOLIO COMPONENT</p>
          <div className="figure my-5 flex justify-center items-center">
            <div className="line ms-2"></div>
            <i className='fa-solid fa-star mx-3'></i>
            <div className="line"></div>
          </div>
          <div className="photos flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 rounded-md p-5">
              <div className="subparent relative overflow-hidden">
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='w-full cursor-pointer rounded-md' alt="" />
                <div className="layer rounded-md">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3  rounded-md p-5">
              <div className="subparent relative overflow-hidden">
              <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='w-full cursor-pointer rounded-md' alt="" />
                <div className="layer rounded-md">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3  rounded-md p-5">
              <div className="subparent relative overflow-hidden">
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='w-full cursor-pointer rounded-md relative' alt="" />
                <div className="layer rounded-md">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3  rounded-md p-5">
              <div className="subparent relative overflow-hidden">
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='w-full cursor-pointer rounded-md relative' alt="" />
                <div className="layer rounded-md">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3  rounded-md p-5">
              <div className="subparent overflow-hidden relative">
                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='w-full cursor-pointer rounded-md relative' alt="" />
                <div className="layer rounded-md">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3  rounded-md p-5">
              <div className="subparent relative overflow-hidden">
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='w-full cursor-pointer rounded-md relative' alt="" />
                <div className="layer rounded-md">
                  <i className='text-white fa-solid fa-plus fa-6x'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}