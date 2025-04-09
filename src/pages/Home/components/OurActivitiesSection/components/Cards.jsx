import React from "react"

export default function Cards({ title, text }) {
  return (
    <section className='bg-linear-to-b from-white to-black px-8 text-sm rounded-md shadow-lg flex flex-col justify-between h-[320px] max-w-[320px]'>
      <div className='pt-36'>
        <h3 className='text-lg text-white font-semibold'>{title}</h3>
        <p className='text-secondary-text mt-2'>{text}</p>
        <div className='flex justify-center'>
          <button className='w-full mt-4 bg-light-green py-2 text-black font-semibold rounded hover:scale-110 duration-300'>
            Reservar Ahora
          </button>
        </div>
      </div>
    </section>
  )
}
