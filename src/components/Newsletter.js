import React from 'react'

const Newsletter = () => {
    return (
        <>

            <div className="min-h-72 w-[70%] m-auto flex flex-col lg:grid grid-cols-3 bg-[#000300] text-white ">
                <div className="col-span-2 lg:mt-32">
                    <p className="text-3xl font-extrabold">Want tips and tricks to optimize your flow?</p>
                    <p>Sign up to newsletter and stay up to date</p>
                </div>
                <div className="col-span-1 lg:mt-32">
                    <div className="flex mb-1">
                        <input className="w-52 px-2 rounded-md text-black" type="text" placeholder='Enter your email' />
                        <button className="bg-[#00df9a] rounded-md px-3 py-1 ml-2">Notify me</button>
                    </div>
                    <p className="text-xs">We care about the protection of your data. Read our</p>
                    <a className="text-[#00df9a] text-sm underline" href="https://www.google.com">Privacy Policy</a>
                </div>
            </div>

        </>
    )
}


export default Newsletter; 
