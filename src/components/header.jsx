import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-50">
  <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className="h-10 rounded-xl" src='https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/cb/cc/3e/cbcc3eb6-9446-e67b-92d1-f9a9e311efcd/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp' />
      {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-4 items-center text-base justify-center">
      <a className="mr-5 hover:text-black font-semibold">Emotions</a>
      <a className="mr-5 hover:text-black font-semibold">Manifesto</a>
      <a className="mr-5 hover:text-black font-semibold">Self Awareness Test</a>
      <a className="mr-5 hover:text-black font-semibold">Work with us</a>
    </nav>
    <button className="inline-flex items-center text-sm text-white bg-black border-0 py-3 px-6 focus:outline-none hover:bg-slate-800 rounded-full text-base mt-4 md:mt-0">
      Download app
    </button>
  </div>
</header>
  )
}

export default Header