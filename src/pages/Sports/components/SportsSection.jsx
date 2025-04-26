import { CalendarIcon, StarIcon, UsersIcon } from "../../../components/ui/Icons"

export default function SportsSection({
  title,
  children,
  label1 = "Para todos",
  label2 = "Horario Flexible",
  label3 = "Coaching profesional",
  img,
}) {
  return (
    <div className='mx-auto text-white'>
      <section className='bg-dark-blue flex justify-center gap-40 py-20'>
        <div className='w-1/4 py-14 space-y-6'>
          <div className='space-y-6'>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <p>{children}</p>
            <div className='[&>span]:bg-blue-night [&>span]:rounded-lg [&>span]:gap-2 [&>span]:flex [&>span]:p-2 flex gap-2'>
              <span>
                <UsersIcon /> {label1}
              </span>
              <span>
                <CalendarIcon /> {label2}
              </span>
              <span>
                <StarIcon /> {label3}
              </span>
            </div>
          </div>
          <button className='bg-light-green text-black px-4 py-2 rounded-lg duration-300 hover:scale-110'>
            Conoce mas!
          </button>
        </div>
        <img
          src={img}
          alt={img}
          className='w-96 object-cover rounded-lg shadow-2xl'
        />
      </section>
    </div>
  )
}
