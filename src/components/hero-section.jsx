import React from 'react'
// import { gsap } from 'gsap';
// import { useEffect, useRef } from 'react';
import gsap from 'gsap';

  // const boxRef = useRef(null);

  // useEffect(() => {
  //   // const box = boxRef.current;

  //   gsap.from(box, {
  //     x: -100, // Starting position
  //     opacity: 0, // Starting opacity
  //     duration: 1, // Animation duration
  //     delay: 0.5, // Delay before animation starts
  //   });
  // }, []);



const HeroSection
 = () => {
  return (
    <>
    <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center rounded-3xl bg-violet-100">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <span className='hero-section-text font-semibold text-black'>Ahead app</span>
      <span className="hero-section-text title-font sm:text-7xl text-3xl mb-4 font-bold text-black">
        Master your life by mastering emotions
        {/* <br className="hidden lg:inline-block"/>readymade gluten */}
      </span>
      <div className="flex justify-center my-6 gap-4 ">
        <button className="text-white bg-black border-0 py-2 px-3 focus:outline-none hover:bg-grey-800 rounded-2xl text-lg flex gap-2 justify-center">
            <img className='h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png?20200509031052" alt="apple-logo" />
            <div className='flex flex-col'>
              <span className='text-xs'>Download on</span>
              <span className='text-xl leading-[2rem]'>App Store</span>
            </div>
        </button>
        <div className='py-2 flex flex-col gap-2'>
          <div className='flex flex-row gap-1 justify-center items-center'>
            <span><img className="h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="star" /></span>
            <span><img className="h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="star" /></span>
            <span><img className="h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="star" /></span>
            <span><img className="h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="star" /></span>
            <span><img className="h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="star" /></span>
          </div>
          <span>
          100+ App Reviews
          </span>
          </div>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section>

<section className="text-gray-700 body-font" >
  <div className="flex
                  place-content-center 
                  container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl title-font text-center text-gray-900 font-semibold w-1/6 grid place-items-center"> 
    EQ beats IQ
    </h1>
    <div className=" flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-end w-5/6">
      <div className="p-4 md:w-1/3 flex">
        <div className="flex-grow pl-6">
          <p className=" leading-relaxed ">
            People with high emotional intellignece (EQ) live more fulfilled lives, They tend to be happier and have healthier relationships.  
          </p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
       
        <div className="flex-grow pl-6">
          <p className=" leading-relaxed text-base">
            They are more successful in their pursuits anbd amke for inspiring leaders. According to science, they earn $29k a year.
            </p>
        </div>
      </div>
    </div>
  </div>
</section>  
  </>

  )
}

export default HeroSection
