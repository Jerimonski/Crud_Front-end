import { useParams } from "react-router-dom"
import Calendar from "../../../components/Calendar"
import {
  CalendarIcon,
  StarIcon,
  UserCircleIcon,
  UsersIcon,
} from "../../../components/ui/Icons"
import useComments from "../../../hooks/useComments"
import { useState } from "react"
import { useUserContext as userProvider } from "./../../../contexts/userContext"

export default function SportPages() {
  const { deporte } = useParams()
  const { comentarios, agregarComentario } = useComments(deporte)
  const { currentUser: user } = userProvider()

  const [nuevoComentario, setNuevoComentario] = useState("")
  const [calificacion, setCalificacion] = useState(0)

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
      calificacion: calificacion,
    })

    setNuevoComentario("")
    setCalificacion(0)
  }

  const SportsInfo = {
    Tennis: {
      title: "Tenis",
      img: "ClaseDeTenis.jpg",
      description: `Mejora tu técnica y precisión con clases de tenis impartidas por entrenadores capacitados...`,
    },
    Natacion: {
      title: "Natación",
      img: "ClasesDeNatacion.jpg",
      description: `Accede a clases de natación en nuestra piscina olímpica...`,
    },
    Baloncesto: {
      title: "Baloncesto",
      img: "ClasesDeBaloncesto.jpg",
      description: `Participa en clases o partidas organizadas en nuestras canchas de baloncesto...`,
    },
    Yoga: {
      title: "Yoga",
      img: "ClasesDeYoga.jpg",
      description: `Agenda sesiones de yoga en un espacio especialmente diseñado para el bienestar...`,
    },
    Gimnasio: {
      title: "Gimnasio",
      img: "ClasesDeGimnasio.jpg",
      description: `Accede a un gimnasio completamente equipado para entrenamientos de fuerza...`,
    },
  }

 

  return (
    <main className='h-full bg-blue-night text-white'>
      {/* Sección Principal */}
      {/* ... (omitido por brevedad, sin cambios) ... */}

      {/* Sección Agenda */}
      { <section className='max-w-[1800px] mx-auto py-28 space-y-14'>
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
      </section> }

      {/* Sección Comentarios */}
      {<section className='max-w-[1800px] mx-auto py-28 space-y-14'>
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

          {/* Calificación de estrellas */}
          <div>
            <label className='block text-white font-semibold mb-2'>Califica el servicio:</label>
            <div className='flex gap-2'>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setCalificacion(num)}
                  className={`text-2xl ${
                    num <= calificacion ? 'text-yellow-400' : 'text-gray-500'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button className='py-3 px-6 rounded bg-light-green text-black hover:scale-110 duration-300'>
            Enviar
          </button>
        </form>

         Comentarios Dinámicos 
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

                    {/* Mostrar calificación */}
                    <div className='flex items-center gap-1 text-yellow-400 text-lg my-1'>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span key={n}>{n <= coment.calificacion ? "★" : "☆"}</span>
                      ))}
                    </div>

                    <p className='text-wrap'>{coment.contenido}</p>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className='text-secondary-text text-center'>
              No hay comentarios aún para este deporte 💬 ¡Sé el primero en comentar!
            </p>
          )}
        </div>
      </section> }
    </main>
  )
}
