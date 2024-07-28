import React , { useEffect } from 'react'

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact';
      }, []);
  return (
    <>
        <div className="parent3 flex justify-center items-center">
            <div className="container w-1/2 mt-36 pb-28">
                <p className='text-4xl font-bold text-center'>CONTACT SECTION</p>
                <div className="figure my-5 flex justify-center items-center">
                    <div className="line ms-2"></div>
                    <i className='fa-solid fa-star mx-3'></i>
                    <div className="line"></div>
                </div>
                <div className="inputs mt-16 flex flex-col items-center">
                    <input type="text" placeholder='userName' className='my-5 border border-transparent border-b-gray-300 rounded-md w-full p-3 focus:outline-none'/>
                    <input type="text" placeholder='userAge' className='my-5 border border-transparent border-b-gray-300 rounded-md w-full p-3 focus:outline-none'/>
                    <input type="email" placeholder='userEmail' className='my-5 border border-transparent border-b-gray-300 rounded-md w-full p-3 focus:outline-none'/>
                    <input type="password" placeholder='userPassword' className='my-5 border border-transparent border-b-gray-300 rounded-md w-full p-3 focus:outline-none'/>
                    <button className='text-white py-2 px-3 self-start rounded-md'>Send Message</button>
                </div>
            </div>
        </div>
    </>
  )
}