import { DownIcon } from "../../../../components/ui/Icons"

export default function HomeScreen() {
  return (
    <div className='relative h-screen flex flex-col'>
      <img
        src='https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?cs=srgb&dl=pexels-pixabay-163403.jpg&fm=jpg'
        alt=''
        className='absolute size-full object-cover'
      />
      <div className='px-20 max-sm:px-10 text-white space-y-4 space-x-3 absolute top-1/3 translate-y-[-50%]'>
        <div class='w-14 border-t-3 border-light-green' />
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
        <button className='cursor-pointer hover:bg-off-green bg-light-green text-black font-semibold px-6 py-2 rounded'>
          Reserva Ya!
        </button>
      </div>
      <section className='text-white flex justify-center w-32 mx-auto '>
        <div className='bottom-0 absolute py-12 gap-2 animate-bounce flex flex-col items-center'>
          Scroll down
          <DownIcon />
        </div>
      </section>
    </div>
  )
}
