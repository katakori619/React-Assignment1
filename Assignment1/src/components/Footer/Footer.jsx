import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='text-white text-center'>
        <div className="first flex flex-col items-center lg:items-start sm:flex-row sm:justify-between p-20">
          <div className="location md:w-1/3 my-5 mx-3">
            <p className='text-2xl sm:text-3xl font-semibold mb-3'>LOCATION</p>
            <p className='mb-3'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="web md:w-1/3 my-5 mx-3">
            <p className='text-2xl sm:text-3xl font-semibold'>AROUND THE WEB</p>
            <div className="icons mt-3 flex justify-center">
              <i className='fa-brands fa-facebook mx-1 icon border border-white p-3 rounded-full'></i>
              <i className='fa-brands fa-twitter mx-1 icon border border-white p-3 rounded-full'></i>
              <i className='fa-brands fa-linkedin-in mx-1 icon border border-white p-3 rounded-full'></i>
              <i className='fa-solid fa-globe mx-1 icon border border-white p-3 rounded-full'></i>
            </div>
          </div>
          <div className="last md:w-1/3 my-5 mx-3">
            <p className='text-2xl sm:text-3xl font-semibold mb-3'>ABOUT FREELANCE</p>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        <div className="second py-5">
          <p className='text-center'>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  )
}