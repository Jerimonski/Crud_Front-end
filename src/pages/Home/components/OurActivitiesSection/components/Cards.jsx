import React from "react"

export default function Cards({ title, text }) {
  return (
    <article className='relative bg-linear-to-b from-white to-black text-sm rounded-md min-w-[320px] min-h-[280px]'>
      <div className='absolute bottom-0 px-6 py-4'>
        <h3 className='text-lg text-white font-semibold py-2'>{title}</h3>
        <p className='text-secondary-text'>{text}</p>
        <div className='flex justify-center'>
          <button className='w-full mt-4 bg-light-green py-2 text-black font-semibold rounded hover:scale-110 duration-300'>
            Reservar Ahora
          </button>
        </div>
      </div>
    </article>
  )
}
