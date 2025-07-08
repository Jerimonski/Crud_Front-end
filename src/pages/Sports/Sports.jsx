import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { StarIcon } from "../../components/ui/Icons"

export default function Sports() {
  const [deportes, setDeportes] = useState([])
  const [busqueda, setBusqueda] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDeportes = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/deportes`)
        setDeportes(res.data)
      } catch (error) {
        console.error("Error al obtener deportes:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchDeportes()
  }, [])

  const deportesFiltrados = deportes.filter((dep) =>
    dep.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className='min-h-screen bg-blue-night text-white'>
      <section className='bg-black text-center text-white space-y-4 pt-12 pb-10'>
        <h1 className='text-4xl font-bold'>
          Descubre tu <span className='text-light-green'>pasión</span> por los
          deportes
        </h1>
        <p className='w-4/5 md:w-1/2 mx-auto text-secondary-text'>
          Explora nuestra selección de actividades deportivas diseñadas para
          todos, en una comunidad de apoyo que fomenta el crecimiento, el
          bienestar y la excelencia.
        </p>
        <input
          type='text'
          placeholder='Buscar deportes...'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className='bg-blue-night border border-dark-green p-3 rounded-lg w-4/5 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-light-green'
        />
      </section>

      <section className='relative min-h-[400px]'>
        {loading ? (
          <div className='absolute inset-0 flex justify-center items-center bg-blue-night bg-opacity-80 z-10'>
            <span className='text-lg animate-pulse'>Cargando deportes...</span>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12 max-w-[1500px] mx-auto'>
            {deportesFiltrados.map((dep) => (
              <div
                key={dep.id}
                className='bg-dark-blue rounded-lg border border-blue-night p-6 flex flex-col justify-between shadow-xl hover:scale-[1.02] hover:border-light-green duration-300'
              >
                <div>
                  <div className='flex justify-between items-center mb-2'>
                    <h3 className='text-2xl font-bold text-white'>
                      {dep.nombre}
                    </h3>
                    <div className='flex items-center gap-1 text-yellow-400'>
                      <StarIcon className='w-5' />
                      <span className='text-sm font-semibold'>
                        {dep.valoracion?.toFixed(1) || "4.5"}
                      </span>
                    </div>
                  </div>
                  <p className='text-sm text-secondary-text italic mb-2'>
                    📍 {dep.ubicacion || "Ubicación desconocida"}
                  </p>
                  <p className='text-md mb-4'>
                    {dep.descripcion || "Sin descripción disponible."}
                  </p>
                </div>
                <div className='flex justify-between items-center mt-auto'>
                  <span className='text-sm text-light-green font-semibold'>
                    Desde ${dep.precio || 25}/hora
                  </span>
                  <Link to={`/deportes/${dep.nombre}`}>
                    <button className='bg-light-green text-black px-4 py-2 rounded-md hover:scale-105 duration-300'>
                      Reservar Ahora
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className='text-center py-16 bg-blue-night'>
        <h2 className='text-2xl font-bold'>
          ¿Listo para comenzar tu{" "}
          <span className='text-yellow-400'>aventura deportiva</span>?
        </h2>
        <p className='text-secondary-text mt-2'>
          Únete a nuestra comunidad y descubre el deporte perfecto para ti
        </p>
      </footer>
    </div>
  )
}
