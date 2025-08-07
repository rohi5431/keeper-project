import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
     <header className="bg-blue-400 py-3 px-6 shadow-md w-full fixed top-0 left-0 z-10">
        <div className='flex justify-between'>
        <img src="/images/keeper.png" alt="" className='w-46 h-15 md:w-46 md:h-13 xs:w-24 xs:h-13'/>
          <div className="md:hidden  flex justify-center align-center">
          <button className="text-white focus:outline-none" onClick={() => setMenu(!menu)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="space-x-6 hidden md:flex items-center">
          {['Home', 'About', 'Notes', 'Contact'].map((item, index) => (
            <a key={index} href="#" style={{ textDecoration: 'none' }} className="text-white text-[20px]  hover:underline hover:bg-green-600 p-1 px-2 rounded-xl">
              {item}
            </a>
          ))}
        </nav>
      </div> 
      </header>
       {menu && (
      <div className="md:hidden mt-24 space-y-2 w-[20%] min-w-[130px] ml-auto mr-4 fixed right-0 z-50">
        {['Home', 'About', 'Notes', 'Contact'].map((item, index) => (
          <a
            key={index}
            href="#"
            style={{ textDecoration: 'none' }}
            className="block text-white bg-blue-500 px-4 py-2 rounded-md text-[18px] hover:bg-green-500 text-center whitespace-nowrap"
          >
          {item}
          </a>
        ))}
      </div>
    )}
     </>
);
};

export default Header