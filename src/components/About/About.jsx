import React , { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);
  return (
    <>
      <div className="about flex justify-center items-center py-24 sm:py-40 lg:py-52 text-white">
        <div className="parent mt-28 w-3/4">
          <p className='text-4xl font-bold text-center'>ABOUT COMPONENT</p>
          <div className="figure my-5 flex justify-center items-center">
              <div className="line ms-2"></div>
              <i className='fa-solid fa-star mx-3'></i>
              <div className="line"></div>
          </div>
          <div className="caption flex md:flex-row flex-col items-center md:justify-center">
            <p className='mx-3 md:my-0 my-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </>
  )
}