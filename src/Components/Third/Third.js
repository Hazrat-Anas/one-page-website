import React, { useState, useEffect, useRef } from "react";
import useIntersectionObserver from "../../custom-hooks/viewport";
import chart from '../../assets/third-section-bull.png'

const FiveCardLayout = () => {
    const [sectionRef, isVisible] = useIntersectionObserver();
  return (
    <div className="flex my-10 flex-col items-center" ref={sectionRef}>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Three cards on the top row */}
        <div className={`w-3/12  md:p-8 card-border rounded shadow-md duration-1000 ${isVisible ? 'transition-transform translate-x-0' : '-translate-x-full'} `}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <ul className="list-disc ps-2">
            <li className="text-white text-start">
            Percentage: 20%
            </li>
            <li className="text-white text-start">
            Token Amount: 1.000.000.000
            </li>
            <li className="text-white text-start">
            Lock-up: Vesting over 6 months with a cliff period of 1 month.
            </li>
          </ul>

        </div>
        <div className={`w-3/12  md:p-8 p-4 card-border rounded shadow-md duration-1000 ${isVisible ? 'transition-transform translate-y-0' : 'translate-y-full'} `}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <ul className="list-disc ps-2">
            <li className="text-white text-start">
            Percentage: 20%
            </li>
            <li className="text-white text-start">
            Token Amount: 1.000.000.000
            </li>
            <li className="text-white text-start">
            Lock-up: Vesting over 6 months with a cliff period of 1 month.
            </li>
          </ul>

        </div>
        <div className={`w-3/12  md:p-8 p-4 card-border rounded shadow-md duration-1000 ${isVisible ? 'transition-transform translate-x-0' : 'translate-x-full'}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <ul className="list-disc ps-2">
            <li className="text-white text-start">
            Percentage: 20%
            </li>
            <li className="text-white text-start">
            Token Amount: 1.000.000.000
            </li>
            <li className="text-white text-start">
            Lock-up: Vesting over 6 months with a cliff period of 1 month.
            </li>
          </ul>

        </div>
      </div>
      <div className="flex mt-4 flex-wrap gap-4 justify-center">
        {/* Two cards on the bottom row */}
        <div className={`w-4/12 md:p-8  p-4 card-border rounded shadow-md duration-1000 ${isVisible ? 'transition-transform translate-x-0' : '-translate-x-full'} `}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <ul className="list-disc ps-2">
            <li className="text-white text-start">
            Percentage: 20%
            </li>
            <li className="text-white text-start">
            Token Amount: 1.000.000.000
            </li>
            <li className="text-white text-start">
            Lock-up: Vesting over 6 months with a cliff period of 1 month.
            </li>
          </ul>

        </div>
        <div className={`w-4/12 md:p-8  p-4 card-border rounded shadow-md duration-1000 ${isVisible ? 'transition-transform translate-x-0' : '-translate-x-full'} `}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <ul className="list-disc ps-2">
            <li className="text-white text-start">
            Percentage: 20%
            </li>
            <li className="text-white text-start">
            Token Amount: 1.000.000.000
            </li>
            <li className="text-white text-start">
            Lock-up: Vesting over 6 months with a cliff period of 1 month.
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

const TransitionSection = () => {
    const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <div className="bg-section-3 py-16 lg:py-40 md:px-16">
    <div
      className=" mx-auto   text-center   mb-10"
      ref={sectionRef}
    >
      <h1
        className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl heading  duration-1000 ${
          isVisible ? "transition-transform translate-y-0" : "-translate-y-28"
        } `}
      >
        Tokenomics
      </h1>
      <p
        className={`mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 montserrat-thin  duration-1000 ${
          isVisible ? "transition-transform translate-y-0" : "translate-y-28"
        } `}
      >
        Bullrocket’s tokenomics encapsulates a meticulous design aimed at
        fostering stability, growth, and sustained value for our investors.
        Anchored on the Solana blockchain, our choice of technology signifies a
        commitment to scalability, efficiency, and low transaction costs..
      </p>

      <div className="flex flex-row " >
        {/* Left Column */}

        <div
          className={`w-1/2 border-blue-800 text-center flex    overflow-hidden duration-1000  p-4 ${
            isVisible
              ? "transition-transform translate-x-0"
              : "-translate-x-full"
          }`}
        >
          <div
            className="shadow-m flex card-border bg-transparent p-8 mx-auto rounded-lg flex-col justify-around text-light"
            style={{ height: "100%", border: "1px solid white" }}
          >
            {" "}
            <div className="mb-4 text-4xl text-white shadow-text">Name: Bullrocket</div>
            <div className="mb-4 text-4xl text-white shadow-text">Symbol: $BROC</div>
            <div className=" mb-4 text-4xl text-white shadow-text ">
              Supply: 5 000 000 000
            </div>
            <div className="mb-4 text-4xl text-white shadow-text">Chain: Solana</div>
          </div>
        </div>

        {/* Right Column */}
       
        <div
         
          className={`w-1/2 text-start     duration-1000 p-4  overflow-hidden ${
            isVisible
              ? "transition-transform translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div style={{width:470,maxHeight:376}} className="card-border flex align-middle justify-center" >

<img src={chart} className=" p-10" alt="" style={{maxHeight:408,maxWidth:408}} />
          </div>

        </div>
      </div>

    </div>
    <FiveCardLayout />
    </div>
  );
};

export default TransitionSection;
