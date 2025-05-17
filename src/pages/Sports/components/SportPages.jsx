import { useParams } from "react-router-dom"
import Calendar from "../../../components/Calendar"
import {
  CalendarIcon,
  StarIcon,
  UserCircleIcon,
  UsersIcon,
} from "../../../components/ui/Icons"
import useComments from "../../../hooks/useComments" // Aquí está tu fetch
import { useState } from "react"
import { useUserContext as userProvider } from "./../../../contexts/userContext"

export default function SportPages() {
  const { deporte } = useParams()
  const { comentarios, agregarComentario } = useComments(deporte)
  const { currentUser: user } = userProvider() // Asumimos que aquí hay un user.name o user.id

  const [nuevoComentario, setNuevoComentario] = useState("")

  const handleEnviar = (e) => {
    e.preventDefault()
    if (!user) {
      alert("Debes estar logueado para comentar")
      return
    }

    agregarComentario({
      nombre: user.nombre,
      contenido: nuevoComentario,
      fecha_publicacion: new Date().toISOString(),
      deporte,
    })
    setNuevoComentario("")
  }

  const SportsInfo = {
    Tennis: {
      title: "Tennis",
      img: "ClaseDeTenis.jpg",
      description: `Reserva tu clase de tenis y mejora tu técnica...`,
    },
    Natacion: {
      title: "Natacion",
      img: "ClasesDeNatacion.jpg",
      description: `Agenda tu clase en nuestra piscina olímpica...`,
    },
    Baloncesto: {
      title: "Baloncesto",
      img: "ClasesDeBaloncesto.jpg",
      description: `Reserva tu cancha y únete a partidas emocionantes...`,
    },
    Yoga: {
      title: "Yoga",
      img: "ClasesDeYoga.jpg",
      description: `Agenda tu sesión de yoga en un ambiente diseñado...`,
    },
    Gimnasio: {
      title: "Gimnasio",
      img: "ClasesDeYoga.jpg",
      description: `Activa tu cuerpo y mente en nuestro gimnasio...`,
    },
  }

  const sport = SportsInfo[deporte]

  return (
    <main className='h-full bg-blue-night text-white'>
      {/* Sección Principal */}
      <section className='max-w-[1800px] flex max-lg:flex-col mx-auto py-28'>
        <div className='space-y-8 lg:w-1/2 max-lg:mx-auto lg:px-14'>
          <h1 className='text-7xl font-semibold'>
            Experimenta el deporte de{" "}
            <span className='text-light-green'>{sport.title}</span>
          </h1>
          <p>{sport?.description}</p>
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
              <UsersIcon ClassName={"w-10"} /> Para Todos
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

      {/* Sección Agenda */}
      <section className='max-w-[1800px] mx-auto py-28 space-y-14'>
        <div className='text-center space-y-4'>
          <h2 className='text-5xl font-semibold'>Agenda de clases</h2>
          <p>
            Reserve sus sesiones de entrenamiento con anticipación y asegure su
            lugar. Nuestro horario flexible se adapta a jugadores de todos los
            niveles y grupos de edad.
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
              Sesión de entrenamiento para
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

      {/* Sección Comentarios */}
      <section className='max-w-[1800px] mx-auto py-28 space-y-14'>
        <form className='space-y-6' onSubmit={handleEnviar}>
          <h3 className='text-xl font-semibold'>Deja un comentario</h3>
          <div className='flex items-center gap-4'>
            <UserCircleIcon ClassName={"w-10"} />
            <div>
              <h4 className='text-lg font-semibold'>
                {user?.nombre || "Invitado"}
              </h4>
              <p className='text-sm text-secondary-text'>Usuario registrado</p>
            </div>
          </div>
          <textarea
            placeholder='Deja un comentario...'
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
            className='border-dark-green border p-4 rounded-lg w-full min-h-36 bg-blue-night text-white'
            required
          />
          <button className='py-3 px-6 rounded bg-light-green text-black hover:scale-110 duration-300'>
            Enviar
          </button>
        </form>

        {/* Comentarios Dinámicos */}
        <div className='space-y-8'>
          {comentarios.length > 0 ? (
            comentarios.map((coment, idx) => (
              <article
                key={idx}
                className='bg-dark-blue border-dark-green border rounded-lg p-8 my-4'
              >
                <div className='flex gap-4'>
                  <div className='w-12'>
                    <UserCircleIcon ClassName={"w-10"} />
                  </div>
                  <div>
                    <h4 className='font-semibold text-lg'>{coment.nombre}</h4>
                    <span className='text-light-green text-sm'>
                      {new Date(coment.fecha_publicacion).toLocaleDateString()}
                    </span>
                    <p className='text-wrap'>{coment.contenido}</p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className='text-secondary-text text-center'>
              No hay comentarios aún para este deporte 💬 ¡Sé el primero en
              comentar!
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
