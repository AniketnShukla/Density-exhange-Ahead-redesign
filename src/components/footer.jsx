import React from 'react'

const Footer = () => {
  return (
<footer className="text-gray-600 body-font h-96 border-t-2 border-gray-200">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-col flex-col">
    <div className='flex flex-col justify-center '>
    <div className='w-full grid place-content-center'>
      <img className="h-10 w-10 rounded-xl " src='https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/cb/cc/3e/cbcc3eb6-9446-e67b-92d1-f9a9e311efcd/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp' />
      </div>
    <span className="text-2xl text-violet-700 ">ahead</span>
    </div>
    <div className='flex gap-24 py-4 text-xs font-semibold'>
      <div className='flex gap-2 justify-center '>
        <span><img className='w-6 h-6' src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Circle-icons-location.svg" alt="" /></span>
        <span className='grid place-content-center'>
        AuguststraBe 26, 10117 Berlin
        </span>
      </div>
      <div className='flex gap-2 justify-center '>
        <span><img className='w-6 h-6' src="https://upload.wikimedia.org/wikipedia/commons/e/ea/EMAIL.png" alt="" /></span>
        <span className='grid place-content-center'>
        hi@ahead-app.com
        </span>
      </div>
    </div>
    <button className="text-white bg-black border-0 py-2 px-3 focus:outline-none hover:bg-grey-800 rounded-2xl text-lg flex gap-2 justify-center">
            <img className='h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png?20200509031052" alt="apple-logo" />
            <div className='flex flex-col'>
              <span className='text-xs'>Download on the</span>
              <span className='text-xl leading-[2rem]'>App Store</span>
            </div>
        </button>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">© 2022 Ahead app
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
    </p>
  </div>
</footer>
  )
}

export default Footer