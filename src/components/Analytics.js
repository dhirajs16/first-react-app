import React from 'react'

const Analytics = () => {
  return (
    <>
        <div className="min-h-[50vh] w-full px-12 lg:px-56 m-auto bg-slate-50 grid lg:grid-cols-3 gap-3">
            <div className='flex items-center lg:justify-center mt-5 lg:mt-0 col-span-1'>
              <img className="rounded-md" src="https://picsum.photos/250" alt="Analytics" />
            </div>
            <div className='flex flex-col justify-center text-left col-span-1 lg:col-span-2'>
              <p className='text-[#00df9a] text-sm font-extrabold uppercase'>data analytics dashboard</p>
              <p className="text-2xl font-extrabold mb-2">Manage Data Analytics Centrally</p>
              <p className="text-gray-500 text-sm font-semibold text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid, culpa quis hic temporibus inventore maxime saepe, nemo dolores officia rem dignissimos autem aspernatur, nihil cumque perspiciatis consectetur sit tempora!</p>
              <div className="flex justify-start items-center">
              <button className="flex bg-black text-[#00df9a] px-5 py-2 rounded-lg my-3">Get Started</button>
              </div>
            </div>
        </div>
    </>
  )
}


export default Analytics;