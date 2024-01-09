import React from 'react'

const Newsletter = () => {
    return (
        <>

            <div className="min-h-[50vh] w-[78%] m-auto flex flex-col lg:grid grid-cols-3 bg-[#000300] text-white py-10 lg:py-0">
                <div className="col-span-2 lg:mt-32">
                    <p className="text-3xl font-extrabold">Want tips and tricks to optimize your flow?</p>
                    <p className="text-sm lg:text-md">Sign up to newsletter and stay up to date</p>
                </div>
                <div className="col-span-1 lg:mt-32">
                    <div className="my-2 lg:mt-0">
                        <input className="block lg:inline w-52 px-2 py-1 lg:mr-2 rounded-md text-black" type="text" placeholder='Enter your email' />
                        <button className="bg-[#00df9a] rounded-md py-1 px-2 mt-2 lg:mt-0">Notify me</button>
                    </div>
                    <p className="text-xs inline lg:block">We care about the protection of your data. Read our </p>
                    <a className="text-[#00df9a] text-sm underline" href="https://www.google.com">Privacy Policy</a>
                </div>
            </div>

        </>
    )
}


export default Newsletter; 
