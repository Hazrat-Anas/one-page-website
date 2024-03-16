// // App.js
// import React from 'react';
// import ReactPlayer from 'react-player';
// import 'tailwindcss/tailwind.css';
// import video from './assets/animated-video.mp4'; // Update with your video file path

// function App() {
//   return (
//     <div className="h-screen flex flex-col">
//       <Navbar />
//       <Hero />
//     </div>
//   );
// }

// function VideoWrapper(){
//   return <div style={{width:'100vh',border:'2px solid red '}}></div>
// }

// const Navbar = () => {
//   return (
//     <nav className="bg-black bg-opacity-50 w-full h-16 flex items-center justify-between px-8 absolute z-10">
//       <h1 className="text-white text-lg font-bold">Your Logo</h1>
//       {/* Add your logo or brand name here */}
//     </nav>
//   );
// };

// const Hero = () => {
//   return (
//     <div className="flex-grow relative">
//       <div style={{border:'10px solid green',height:'100vh'}} className=" inset-0">
//         <ReactPlayer
//           url={video} // Update with your video file path
//           playing={true}
//           loop={true}
//           muted={true}
//           width='100%'
//           height='100%'
          
//         />
//       </div>
//       <div className="absolute inset-0 flex items-center justify-center text-white">
//         <div className="max-w-md mx-auto p-8">
//           <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
//           <p className="text-xl mb-8">Your awesome tagline goes here!</p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import './App.css';
import React from 'react'
import Header from './Header';
import Landig from './Landing';
import Navbar from './Components/Navbar/Navbar';
import TwoColumnTransition from './Components/Transition/Transition';
import Third from './Components/Third/Third';
import MasonryLayout from './Components/Fourth/Fourth';
 
function App() {
  return (
 <div className='overflow-hidden'> 
  <Navbar/>
  <Landig/>
  <TwoColumnTransition/>
  <Third/>
  <MasonryLayout/>

 </div>
  );
}

export default App;