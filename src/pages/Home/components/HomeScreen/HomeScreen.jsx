export default function HomeScreen() {
  return (
    <div className='relative bg-linear-to-l from-[#b1b1b1] to-[#101010] h-screen flex flex-col'>
      <div className='px-20 text-white space-y-4 space-x-3'>
        <div class='w-14 border-t-3 border-light-green' />
        <h1 className='text-6xl font-semibold'>
          Book your
          <span className='text-light-green px-3'>
            sports <br /> activities
          </span>
          with ease
        </h1>
        <p className='text-secondary-text w-80'>
          Reserve counts, book classes, and secure your spot at our state
        </p>
        <button className='hover:bg-off-green bg-light-green text-black px-6 py-2 rounded'>
          Book Now
        </button>
        <button className='hover:bg-off-green bg-light-green text-black px-8 py-2 rounded'>
          Book Now
        </button>
      </div>
      <div className='text-white flex justify-center w-32 mx-auto'>
        <span className='bottom-0 absolute'>Scroll down</span>
        <span>zx</span>
      </div>
    </div>
  )
}
