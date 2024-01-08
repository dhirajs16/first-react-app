import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [openNav, setOpenNav] = useState(true);
  const toggle = () => { setOpenNav(!openNav) };

  return (
    <>

      


      {/* Desktop view */}
      <nav className='text-white flex justify-between items-center h-[10vh] w-[90%] lg:w-[80%] m-auto'>
        <h1 className='text-[#00df9a] text-xl font-bold cursor-pointer'>React.</h1>
        <ul className='hidden lg:flex justify-between items-center gap-5 lg:gap-10 '>
          <a className="transition ease-in hover:text-[#00df9a]" href="#home">Home</a>
          <a className="transition ease-in hover:text-[#00df9a]" href="#company">Company</a>
          <a className="transition ease-in hover:text-[#00df9a]" href="#resources">Resources</a>
          <a className="transition ease-in hover:text-[#00df9a]" href="#about">About</a>
          <a className="transition ease-in hover:text-[#00df9a]" href="#contacts">Contacts</a>
          <button className="bg-white text-[#000300] px-5 py-2 rounded-lg transition ease-out duration-100 delay-75 hover:bg-[#00df9a]">Get Started</button>
        </ul>

        {/* Mobile view dropdown */}
        <button onClick={toggle} className="lg:hidden">
          {openNav ?
            <>
              <IoMdMenu size={25} />
            </>
            :
            <>
              <IoMdClose size={25} />
              <div className='lg:hidden fixed top-0 bg-[#000300] flex flex-col h-full w-[50%] sm:w-[30%] p-5 text-white left-0'>
                <h1 className='text-[#00df9a] text-xl font-bold h-16'>React.</h1>

                <a className="pt-3 border-b border-gray-500" href="#home">Home</a>
                <a className="pt-3 border-b border-gray-500" href="#company">Company</a>
                <a className="pt-3 border-b border-gray-500" href="#resources">Resources</a>
                <a className="pt-3 border-b border-gray-500" href="#about">About</a>
                <a className="pt-3 border-b border-gray-500" href="#contacts">Contacts</a>
              </div>
            </>
          }
        </button>

      </nav>
    </>
  )
}

export default Navbar