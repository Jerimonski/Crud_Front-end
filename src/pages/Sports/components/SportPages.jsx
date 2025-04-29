import { useParams } from "react-router-dom"
import Calendar from "../../../components/Calendar"
import { CalendarIcon } from "./../../../components/ui/Icons"

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
      <section className='flex flex-wrap justify-center'>
        <div className='space-y-8'>
          <h1 className='text-7xl font-semibold'>
            Experimenta el deporte de{" "}
            <span className='text-light-green'>{sport.title}</span>
          </h1>
          <p className='w-[500px]'>{sport.description}</p>
          <button className='py-2 px-6 rounded hover:scale-110 duration-300 bg-light-green text-black'>
            Ver agenda
          </button>
          <div className='flex justify-center gap-4 w-full [&>span]:py-2 [&>span]:gap-4 [&>span]:rounded [&>span]:bg-dark-blue [&>span]:w-full [&>span]:text-center'>
            <span>Box1</span>
            <span>Box2</span>
            <span>Box3</span>
          </div>
        </div>
        <div>
          <img
            src={`/${sport.img}`}
            className='max-w-[500px] object-cover border border-light-green'
            alt={sport.img}
          />
        </div>
      </section>
      <section>
        <div className='text-center'>
          <h2 className='text-3xl font-semibold'>Agenda de clases</h2>
          <p>
            Book your training sessions in advance and secure your spot. Our
            flexible schedule accommodates players of all levels and age groups.
          </p>
        </div>
        <div className='flex gap-4 bg-dark-blue'>
          <div className='border border-off-green bg-blue-night p-4 rounded-lg'>
            <div className='flex'>
              <CalendarIcon />
              Escoge una fecha
            </div>
            <Calendar />
          </div>
          <div className='border border-off-green bg-blue-night'>
            <h3>Sesion de entrenamiento para</h3>
            <article className='container mx-auto px-4 py-12'>
              <div className='text-center mb-12'>
                <div className='inline-block bg-[#3cff8f]/10 p-3 rounded-lg mb-4 border border-off-green'>
                  Icon
                </div>
                <h2 className='text-4xl font-bold mb-6'>
                  What Our Players Say
                </h2>
                <p className='text-lg max-w-3xl mx-auto text-secondary-text'>
                  Don't just take our word for it. Hear from the players who
                  have experienced our soccer programs firsthand.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
