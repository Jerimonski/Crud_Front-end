import React from 'react'

export default function Cards({title, text}) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg  shadow-lg flex flex-col justify-between">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-200 mt-2">
        
        {text}
      </p>
      <div className='flex justify-center'>
      <button className="mt-4 bg-yellow-500 px-6 py-2 w-fit text-black font-semibold rounded hover:scale-110 duration-300">
        Book Now
      </button>
      </div>
    </div>
  )
}
