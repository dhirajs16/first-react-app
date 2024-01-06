import React from 'react'
// import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  // const [nav, setNav] = useState(true);
  // const navHandle = () => {
  //   setNav(!nav);
  // }


  return (
    <>

      {/* Mobile view dropdown
      <div className='lg:hidden fixed top-0 left-0 bg-[#000300] flex flex-col h-full w-[60%] p-5 text-white'>
        <h1 className='text-[#00df9a] text-xl font-bold h-16'>React.</h1>

        <a className="pt-3 border-b border-gray-500" href="#home">Home</a>
        <a className="pt-3 border-b border-gray-500" href="#company">Company</a>
        <a className="pt-3 border-b border-gray-500" href="#resources">Resources</a>
        <a className="pt-3 border-b border-gray-500" href="#about">About</a>
        <a className="pt-3 border-b border-gray-500" href="#contacts">Contacts</a>
      </div> */}
   

      {/* Desktop view */}
      <nav className='text-white flex justify-between items-center h-[10vh] w-[90%] lg:w-[80%] m-auto'>
        <h1 className='text-[#00df9a] text-xl font-bold'>React.</h1>
        <ul className='hidden lg:flex justify-between items-center gap-5 lg:gap-10 '>
          <a href="#home">Home</a>
          <a href="#company">Company</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
          <a href="#contacts">Contacts</a>
          <button className="bg-white text-[#000300] px-5 py-2 rounded-lg">Get Started</button>
        </ul>
{/* 
        <div className='lg:hidden' onClick={navHandle}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenuUnfold size={20} />}
          {console.log(nav)}
        </div> */}
      </nav>
    </>
  )
}

export default Navbar