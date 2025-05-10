import { useParams } from "react-router-dom"
import Calendar from "../../../components/Calendar"
import {
  CalendarIcon,
  StarIcon,
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
    Gimnasio: {
      title: "Gimnasio",
      img: "ClasesDeYoga.jpg",
      description: `Activa tu cuerpo y mente en nuestro gimnasio diseñado para potenciar tu energía y vitalidad. 
      Contamos con una variedad de clases y equipos para todos los niveles, dirigidos por instructores expertos. 
      Reserva tu espacio de forma sencilla y experimenta la transformación a través del movimiento y la fuerza.`,
    },
  }
  const { deporte } = useParams()
  const sport = SportsInfo[deporte]

  return (
    <main className='h-full bg-blue-night text-white'>
      <section className='max-w-[1800px] flex max-lg:flex-col mx-auto py-28'>
        <div className='space-y-8 lg:w-1/2 max-lg:mx-auto lg:px-14'>
          <h1 className='text-7xl font-semibold'>
            Experimenta el deporte de{" "}
            <span className='text-light-green'>{sport.title}</span>
          </h1>
          <p className=''>{sport.description}</p>
          <button className='py-2 px-6 rounded hover:scale-110 duration-300 bg-light-green text-black'>
            Ver agenda
          </button>
          <div className='flex justify-center gap-4 w-full [&>span]:flex [&>span]:flex-col [&>span]:items-center [&>span]:py-2 [&>span]:gap-4 [&>span]:rounded-lg [&>span]:bg-dark-blue [&>span]:w-full [&>span]:text-center'>
            <span>
              <CalendarIcon ClassName={"w-10"} /> Horario Flexible
            </span>
            <span>
              <StarIcon ClassName={"w-10"} /> Coaching Profesional
            </span>
            <span>
              <UsersIcon ClassName={"w-10"} />
              Para Todos
            </span>
          </div>
        </div>
        <div className='lg:w-1/2 max-lg:mx-auto lg:px-14 max-lg:pt-14'>
          <img
            src={`/${sport.img}`}
            className='w-full max-h-[500px] object-cover border rounded-lg border-light-green'
            alt={sport.img}
          />
        </div>
      </section>

      <section className='max-w-[1800px] mx-auto py-28 space-y-14'>
        <div className='text-center space-y-4'>
          <h2 className='text-5xl font-semibold'>Agenda de clases</h2>
          <p>
            Reserve sus sesiones de entrenamiento con anticipación y asegure su
            lugar. Nuestro el horario flexible se adapta a jugadores de todos
            los niveles y grupos de edad.
          </p>
        </div>
        <div className='flex max-lg:flex-col p-8 gap-6 bg-dark-blue justify-center rounded-lg'>
          <div className='mx-auto border border-dark-green bg-blue-night p-4 rounded-lg space-y-4'>
            <div className='flex gap-2 justify-center'>
              <CalendarIcon ClassName={"w-6"} />
              Escoge una fecha
            </div>
            <Calendar />
          </div>
          <div className='border border-dark-green bg-blue-night w-full p-4'>
            <h3 className='text-lg font-semibold pb-14'>
              Sesion de entrenamiento para
            </h3>
            <div className='text-center space-y-4'>
              <div className='inline-block p-4 bg-dark-blue rounded-full border border-off-green'>
                <CalendarIcon ClassName={"w-8"} />
              </div>
              <h3>No hay sesiones disponibles para esta fecha</h3>
              <p className='text-lg max-w-3xl mx-auto text-secondary-text'>
                No hay sesiones de entrenamiento disponibles para la fecha
                seleccionada. Por favor seleccione otra fecha o contáctenos para
                programar una sesión.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1800px] mx-auto py-28 space-y-14'>
        <div className='text-center space-y-8'>
          <h2 className='text-5xl font-semibold'>Comentarios</h2>
          <p className='text-secondary-text'>
            No confíe solo en nuestra palabra. Escuche a los jugadores que han
            experimenté nuestros programas de fútbol de primera mano.
          </p>
        </div>
        <div className='bg-dark-blue p-8 [&>label]:flex [&>label]:flex-col rounded-lg'>
          <form className='space-y-6'>
            <h3 className='text-xl font-semibold'>Deja a un comentario</h3>
            <input
              type='text'
              placeholder='Nombre'
              className='border-dark-green border p-4 rounded-lg w-full bg-blue-night'
            />
            <h3 className='text-xl font-semibold'>Rating:</h3>
            <textarea
              type='text'
              placeholder='Deja un comentario...'
              className='border-dark-green border p-4 rounded-lg w-full min-h-36 bg-blue-night'
            />
            <button className='py-3 px-6 rounded bg-light-green text-black hover:scale-110 duration-300'>
              Enviar
            </button>
          </form>
        </div>
        <article className='bg-dark-blue border-dark-green border rounded-lg p-8'>
          <div className='flex gap-4'>
            <div className='w-12'>
              <UserCircleIcon ClassName={"w-10"} />
            </div>
            <div>
              <h4 className='font-semibold text-lg'>ZarcortGame</h4>
              <span className='text-light-green'>Date</span>
              <p className='text-wrap'>
                [Verso 1: Herobrine] Abran paso a Herobrine Entrando en el
                freestyle Lo siento, barco, no evitarás que te destroce Pero a
                nadie le va a importar Ya que nadie te conoce ¿Un barquito
                fantasma? Qué chistoso Un trozo de madera contra el ser más
                poderoso Me teletransporto, tengo la realidad a mi poder Si
                quieres sigo Pero con sólo mi espada me basta pa' dejarte
                hundido <br />
                <br />
                [Verso 2: El Caleuche] Ha llegado El Caleuche entrando al duelo
                Contra el ser que fue eliminado de su propio juego Yo soy la
                leyenda que a la gente mata Y tú, la leyenda de los niños rata
                (This is a Sadikbeats production) Fuera de tu mundo no me haces
                nada Después de esto serás Enderman; pues le tendrás miedo al
                agua ¿Qué nadie me conoce? Ja, puta mierda Por lo menos lo' que
                me conocen sí me recuerdan
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
