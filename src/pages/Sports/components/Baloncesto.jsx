import { CalendarIcon, StarIcon, UsersIcon } from "../../../components/ui/Icons"

export default function Baloncesto() {
  return (
    <div className='mx-auto text-white'>
      <section className='bg-blue-night flex justify-center gap-48 py-16'>
        <img
          src='ClaseDeTenis.jpg'
          alt='ClaseDeTenis'
          className='w-96 object-cover rounded-lg shadow-2xl'
        />
        <div className='w-1/4 py-12'>
          <div className='space-y-4'>
            <h2 className='text-4xl font-semibold'>Swimming</h2>
            <p>
              Experience the thrill of tennis on our professional courts with
              expert coaching for all skill levels. Our state-of-the-art
              facilities and passionate instructors will help you master your
              technique and enjoy the game like never before.
            </p>
            <div className='[&>span]:bg-blue-night [&>span]:rounded-lg [&>span]:flex [&>span]:p-2 flex gap-2'>
              <span>
                <UsersIcon /> All skill levels
              </span>
              <span>
                <CalendarIcon /> Flexible Schedule
              </span>
              <span>
                <StarIcon /> Pro coaching
              </span>
            </div>
          </div>
          <button className='bg-light-green text-black px-4 py-2 rounded-lg duration-300 hover:scale-110'>
            Conoce mas!
          </button>
        </div>
      </section>
    </div>
  )
}
