import { DownIcon } from "../../../../components/ui/Icons"

export default function HomeScreen() {
  return (
    <section className='h-screen'>
      <img
        src='https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?cs=srgb&dl=pexels-pixabay-163403.jpg&fm=jpg'
        alt='Boxeador'
        className='absolute size-full object-cover brightness-70'
      />
      <div className='px-20 max-sm:px-10'>
        <div className='w-[1800px] mx-auto'>
          <header className='text-white space-y-4 space-x-3 absolute top-1/3 translate-y-[-50%]'>
            <hr class='w-14 border-t-3 rounded border-2 border-light-green' />
            <h1 className='text-7xl max-sm:text-5xl font-semibold'>
              Agenda tus
              <span className='text-light-green px-5'>
                actividades <br /> deportivas
              </span>
              con facilidad
            </h1>
            <p className='text-secondary-text text-2xl w-96'>
              Reserva salas, Agenda clases y asegura tu lugar en nuestra sede
            </p>
            <button
              type='button'
              className='cursor-pointer duration-300 hover:bg-off-green bg-light-green text-black font-semibold px-6 py-2 rounded'
            >
              Reserva Ya!
            </button>
          </header>
          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 text-white'>
            <a className='gap-2 animate-bounce flex flex-col items-center'>
              Conoce más
              <DownIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
