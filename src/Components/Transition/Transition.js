import React, { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from '../../custom-hooks/viewport';

const TwoColumnTransition = () => {
    const [sectionRef, isVisible] = useIntersectionObserver();

  return (

<section className=" bg-section  bg-no-repeat  bg-gray-700 bg-blend-multiply">
<div className="flex flex-row " ref={sectionRef}>

        {/* Left Column */}

      <div className={`w-1/2 bg-bull overflow-hidden px-3 duration-1000 py-10 ${isVisible ? 'transition-transform translate-x-0' : '-translate-x-full'}`}>
     
      </div>

      {/* Right Column */}
      <div className={`w-1/2 text-start py-10 px-3 duration-1000  overflow-hidden ${isVisible ? 'transition-transform translate-x-0' : 'translate-x-full'}`}>
      <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl sm:px-4 lg:px-12 heading-2">About</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-4 lg:px-12 montserrat-thin">With a fixed supply of 5 000 000 000, Bullrocket’s launch on April 21. 2024</p>
        <p className="mb-8 text-start text-lg font-normal text-gray-300 lg:text-xl sm:px-4 lg:px-12 montserrat-thin">is strategically timed to coincide with the astrological alignment of the stars, specifically tailored for the Taurus constellation.</p>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-4 lg:px-12 montserrat-thin">Our philosophy is rooted in the anticipation of the next bull run, and Bullrocket is positioned as a celestial force driving this resurgence. The synergy between the coin’s launch date and the alignment of stars for Taurus adds a unique dimension, aligning the precision of celestial navigation with our calculated venture into the crypto market.</p>
      </div>
    </div>
</section>

  );
};

export default TwoColumnTransition;
