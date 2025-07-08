import { useParams } from "react-router-dom"
import {
  CalendarIcon,
  StarIcon,
  UserCircleIcon,
  UsersIcon,
} from "../../../components/ui/Icons"
import useComments from "../../../hooks/useComments"
import { useState, useEffect } from "react"
import { useUserContext as userProvider } from "./../../../contexts/userContext"

export default function SportPages() {
  const { deporte } = useParams()
  const [sportIdForComments, setSportIdForComments] = useState(null)
  const { comentarios, agregarComentario } = useComments(sportIdForComments)
  const { currentUser: user } = userProvider()

  const [nuevoComentario, setNuevoComentario] = useState("")
  const [calificacion, setCalificacion] = useState(0)

  // Estado para el deporte cargado de la base de datos
  const [sport, setSport] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Traemos el deporte específico desde la base de datos vía API
  useEffect(() => {
    async function fetchDeporte() {
      setLoading(true)
      setError(null)
      try {
        // Aquí cambias la URL por la de tu API real
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/deportes/nombre/${deporte}`
        )
        if (!response.ok) {
          throw new Error("Error al obtener el deporte")
        }
        const data = await response.json()
        setSport(data)
        setSportIdForComments(data.id)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchDeporte()
  }, [deporte])

  const handleEnviar = (e) => {
    e.preventDefault()
    if (!user) {
      alert("Debes estar logueado para comentar")
      return
    }
    if (!sport?.id) {
      alert("Deporte no encontrado")
      return
    }

    agregarComentario({
      usuario_id: user.id,
      deporte_id: sport.id,
      contenido: nuevoComentario,
      valoracion: calificacion,
      fecha: new Date().toISOString(),
    })

    setNuevoComentario("")
    setCalificacion(0)
  }

  if (loading) {
    return (
      <main className='h-full bg-blue-night text-white flex justify-center items-center min-h-screen'>
        <p className='text-2xl'>Cargando info del deporte...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className='h-full bg-blue-night text-white flex justify-center items-center min-h-screen'>
        <p className='text-2xl text-red-500'>{error}</p>
      </main>
    )
  }

  if (!sport) {
    return (
      <main className='h-full bg-blue-night text-white flex justify-center items-center min-h-screen'>
        <p className='text-2xl'>Deporte no encontrado 😢</p>
      </main>
    )
  }

  return (
    <main className='h-full bg-blue-night text-white'>
      {/* Sección Principal */}
      <section className='max-w-[1800px] flex max-lg:flex-col mx-auto py-28'>
        <div className='space-y-8 lg:w-1/2 max-lg:mx-auto lg:px-14'>
          <h1 className='text-7xl font-semibold'>
            Experimenta el deporte de{" "}
            <span className='text-light-green'>{sport.title}</span>
          </h1>
          <p>{sport.description}</p>
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
          <img className='w-full max-h-[500px] object-cover border rounded-lg border-light-green' />
        </div>
      </section>

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
            <div className='flex gap-2'>
              <CalendarIcon ClassName={"w-6"} />
              Escoge una fecha
            </div>
            <label className='flex flex-col gap-2 w-64'>
              <input type='date' className='bg-white text-black' />
            </label>
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
      {/* ... resto del código igual ... */}

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

          <div>
            <label className='block text-white font-semibold mb-2'>
              Califica el servicio:
            </label>
            <div className='flex gap-2'>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type='button'
                  key={num}
                  onClick={() => setCalificacion(num)}
                  className={`text-2xl ${
                    num <= calificacion ? "text-yellow-400" : "text-gray-500"
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
                      {new Date(coment.fecha).toLocaleDateString()}
                    </span>

                    <div className='flex items-center gap-1 text-yellow-400 text-lg my-1'>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span key={n}>
                          {n <= coment.valoracion ? "★" : "☆"}
                        </span>
                      ))}
                    </div>

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
