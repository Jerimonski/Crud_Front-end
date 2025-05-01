import { useParams } from "react-router-dom"
import Calendar from "../../../components/Calendar"
import {
  CalendarIcon,
  UserCircleIcon,
  UsersIcon,
} from "./../../../components/ui/Icons"

export default function SportPages() {
  const SportsInfo = {
    Tennis: {
      title: "Tennis",
      img: "ClaseDeTenis.jpg",
      description: `Reserva tu clase de tenis y mejora tu técnica en nuestras canchas profesionales. 
        Con entrenadores expertos y horarios flexibles, te ofrecemos una experiencia 
        personalizada para todos los niveles. ¡Asegura tu lugar y vive la emoción del tenis!`,
    },
    Natacion: {
      title: "Natacion",
      img: "ClasesDeNatacion.jpg",
      description: `Agenda tu clase en nuestra piscina olímpica y mejora tu nivel con programas 
      adaptados a cada etapa del aprendizaje. Desde seguridad en el agua hasta técnica avanzada, 
      todo está listo para que reserves tu espacio y nades con confianza.`,
    },
    Baloncesto: {
      title: "Baloncesto",
      img: "ClasesDeBaloncesto.jpg",
      description: `Reserva tu cancha y únete a partidas emocionantes o entrenamientos guiados 
      por expertos. Nuestro sistema de agendamiento te permite acceder fácilmente a horarios 
      disponibles, ya sea para jugar entre amigos o practicar en ligas competitivas.`,
    },
    Yoga: {
      title: "Yoga",
      img: "ClasesDeYoga.jpg",
      description: `Agenda tu sesión de yoga en un ambiente diseñado para el equilibrio y la serenidad.
      Ofrecemos clases en distintos horarios y niveles, guiadas por instructores certificados. 
      Reserva fácilmente y transforma tu día con bienestar y tranquilidad.`,
    },
  }
  const { deporte } = useParams()
  const sport = SportsInfo[deporte]

  return (
    <main className='h-full bg-blue-night text-white'>
      <section className='max-w-[1800px] flex max-lg:flex-col mx-auto py-14'>
        <div className='space-y-8 w-1/2 max-lg:mx-auto'>
          <h1 className='text-7xl font-semibold'>
            Experimenta el deporte de{" "}
            <span className='text-light-green'>{sport.title}</span>
          </h1>
          <p className=''>{sport.description}</p>
          <button className='py-2 px-6 rounded hover:scale-110 duration-300 bg-light-green text-black'>
            Ver agenda
          </button>
          <div className='flex justify-center gap-4 w-full [&>span]:py-2 [&>span]:gap-4 [&>span]:rounded [&>span]:bg-dark-blue [&>span]:w-full [&>span]:text-center'>
            <span>Box1</span>
            <span>Box2</span>
            <span>Box3</span>
          </div>
        </div>
        <div className='w-1/2 max-lg:mx-auto'>
          <img
            src={`/${sport.img}`}
            className='w-full object-cover border border-light-green'
            alt={sport.img}
          />
        </div>
      </section>

      <section className='max-w-[1800px] mx-auto py-14 space-y-14'>
        <div className='text-center space-y-8 '>
          <h2 className='text-5xl font-semibold'>Agenda de clases</h2>
          <p>
            Book your training sessions in advance and secure your spot. Our
            flexible schedule accommodates players of all levels and age groups.
          </p>
        </div>
        <div className='flex max-lg:flex-col p-8 gap-6 bg-dark-blue justify-center rounded-lg'>
          <div className='border border-dark-green bg-blue-night p-4 rounded-lg space-y-4'>
            <div className='flex'>
              <CalendarIcon />
              Escoge una fecha
            </div>
            <Calendar />
          </div>
          <div className='border border-dark-green bg-blue-night w-full p-4'>
            <h3 className='text-lg font-semibold pb-14'>
              Sesion de entrenamiento para
            </h3>
            <div className='text-center space-y-4'>
              <div className='inline-block p-4 rounded-lg border border-dark-green'>
                Icon
              </div>
              <h3>No Sessions Available</h3>
              <p className='text-lg max-w-3xl mx-auto text-secondary-text'>
                No training sessions available for the selected date. Please
                select another date or contact us to schedule a session.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1800px] mx-auto py-14 space-y-14'>
        <div className='text-center space-y-8'>
          <h2 className='text-5xl font-semibold'>Cooment section</h2>
          <p className='text-secondary-text'>
            Don't just take our word for it. Hear from the players who have
            experienced our soccer programs firsthand.
          </p>
        </div>
        <div className='bg-dark-blue p-8 [&>label]:flex [&>label]:flex-col rounded-lg'>
          <form className='space-y-6'>
            <h3 className='text-xl font-semibold'>Deja a un comentario</h3>
            <input
              type='text'
              placeholder='Nombre'
              className='border-dark-green border py-4 rounded-lg w-full bg-blue-night'
            />
            <span>Rating:</span>
            <textarea
              type='text'
              placeholder='Nombre'
              className='border-dark-green border py-4 rounded-lg w-full min-h-36 bg-blue-night'
            />
            <button className='py-3 px-6 rounded bg-light-green text-black hover:scale-110 duration-300'>
              Enviar
            </button>
          </form>
        </div>
        <article className='bg-dark-blue border-dark-green border rounded-lg p-8'>
          <div className='flex gap-4'>
            <div className='w-12'>
              <UserCircleIcon />
            </div>
            <div className=''>
              <h4 className='font-semibold text-lg'>User fokin name</h4>
              <span className='text-light-green'>Date</span>
              <p className='text-wrap'>
                asdadsdasdasdasdasdsadsadasdadsadasdasdsadsaqwdwqdwdq
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
