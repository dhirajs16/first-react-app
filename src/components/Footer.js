import React from 'react'
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";



const Footer = () => {
    return (
        <>
            <div className=" grid lg:grid-cols-3 min-h-[50vh] w-[80%] mx-auto bg-[#000] py-10 lg:py-20">
                <div className='col-span-1 flex flex-col justify-evenly items-start'>
                    <h1 className="text-[#00df9a] text-lg font-semibold cursor-pointer">React.</h1>
                    <p className="text-slate-300 mb-5 text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab molestias magnam est animi earum eum eveniet incidunt nulla dolore quam?</p>
                    <div className='text-[#00df9a] flex items-center gap-5'>
                        <FaFacebookSquare className='cursor-pointer transition ease-in hover:scale-125' size={25} />
                        <RiInstagramFill className='cursor-pointer transition ease-in hover:scale-125' size={25} />
                        <FaTwitter className='cursor-pointer transition ease-in hover:scale-125' size={25} />
                    </div>
                </div>
                <div className='col-span-2 flex justify-between lg:w-[70%] lg:mx-auto'>
                    <div className="text-left text-slate-300 mt-20">
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Solutions</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Analytics</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Marketing</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Commerce</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Insights</p>
                    </div>
                    <div className="text-left text-slate-300 mt-20">
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Support</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Guide</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Documents</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">API status</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Insights</p>
                    </div>
                    <div className="text-left text-slate-300 mt-20">
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Company</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">About</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Blogs</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Jobs</p>
                        <p className="transition ease-in hover:text-[#00df9a] cursor-pointer">Press</p>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Footer;
