import { Link } from "react-router-dom"
import { CalendarIcon, StarIcon, UsersIcon } from "../../../components/ui/Icons"

export default function SecondSportSection({
  title,
  children,
  label1 = "Para Todos",
  label2 = "Horario Flexible",
  label3 = "Coaching Profesional",
  img,
}) {
  return (
    <div className='mx-auto text-white'>
      <section className='bg-blue-night flex justify-center gap-34 py-20'>
        <img
          src={img}
          alt={img}
          className='w-96 h-96 object-cover rounded-lg shadow-2xl'
        />
        <div className='w-1/4 py-14 space-y-6'>
          <div className='space-y-6'>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <p>{children}</p>
            <div className='[&>span]:bg-blue-night [&>span]:text-sm [&>span]:rounded-lg [&>span]:gap-2 [&>span]:flex [&>span]:p-2 flex gap-2'>
              <span>
                <UsersIcon ClassName={"w-10"} /> {label1}
              </span>
              <span>
                <CalendarIcon ClassName={"w-10"} /> {label2}
              </span>
              <span>
                <StarIcon ClassName={"w-10"} /> {label3}
              </span>
            </div>
          </div>
          <Link to={`/deportes/${title}`}>
            <button className='bg-light-green text-black px-4 py-2 rounded-lg duration-300 hover:scale-110'>
              Conoce mas!
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
