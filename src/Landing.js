import React from 'react'
import video from './assets/animated-video.mp4'

const Landig = () => {
  return (
//     <div className='landing'>
//         <video src={video} autoPlay muted loop></video>
//         <div className='overlay'></div>
//         <div className='content'>
//         <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bullrocket</h1>
//             <blockquote className="text-xl  font-semibold text-gray-900 dark:text-white">
//     <p>"A groundbreaking memcoin built on the Solana blockchain, emerges as a beacon of innovation and financial potential in the cryptocurrency landscape."</p>
// </blockquote>
//             <div>
//             <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5  text-center  mb-2 me-3 py-3.5">Buy Now</button>
//             <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 mb-2">See Chart</button>
//             </div>
            
//         </div> 

//     </div>

<section >
<video src={video} autoPlay muted loop></video>
<div className='overlay'></div>
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 content mb-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl heading  ">Bullrocket</h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 montserrat">A groundbreaking memcoin built on the Solana blockchain, emerges as a beacon of innovation and financial potential in the cryptocurrency landscape.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Buy Now
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                See Chart
            </a>  
        </div>
    </div>
</section>

  )
}

export default Landig
