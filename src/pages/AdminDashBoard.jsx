import { useState, useEffect } from "react"
import axios from "axios"

export default function AdminDashboard() {
  const [deportes, setDeportes] = useState([])
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [nuevoDeporte, setNuevoDeporte] = useState({
    nombre: "",
    entrenador: "",
    descripcion: "",
  })

  const [reservas, setReservas] = useState([])

  useEffect(() => {
    fetchDeportes()
    fetchReservas()
  }, [])

  const fetchDeportes = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/deportes`
      )
      setDeportes(response.data)
    } catch (error) {
      console.error("Error al obtener deportes:", error)
    }
  }

  const fetchReservas = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/reservas/admin`
      )
      setReservas(response.data)
    } catch (error) {
      console.error("Error al obtener reservas:", error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNuevoDeporte({ ...nuevoDeporte, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/deportes`, nuevoDeporte)
      fetchDeportes()
      setNuevoDeporte({ nombre: "", entrenador: "", descripcion: "" })
      setMostrarFormulario(false)
    } catch (error) {
      console.error("Error al crear deporte:", error)
    }
  }

  return (
    <div className='min-h-screen bg-black text-white p-6'>
      <header className='flex justify-between items-center mb-6'>
        <div>
          <h1 className='text-2xl font-bold'>BookMyFit Admin</h1>
          <p className='text-sm text-gray-400'>
            Panel de administración de deportes
          </p>
        </div>
        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2'
        >
          Crear Deporte
        </button>
      </header>

      {mostrarFormulario && (
        <form
          onSubmit={handleSubmit}
          className='mb-6 bg-zinc-800 p-4 rounded-lg border border-zinc-700'
        >
          <div className='mb-3'>
            <label className='block text-sm mb-1'>Título del deporte</label>
            <input
              type='text'
              name='nombre'
              value={nuevoDeporte.nombre}
              onChange={handleChange}
              className='w-full p-2 rounded bg-zinc-900 text-white border border-zinc-700'
              required
            />
          </div>
          <div className='mb-3'>
            <label className='block text-sm mb-1'>Nombre del entrenador</label>
            <input
              type='text'
              name='entrenador'
              value={nuevoDeporte.entrenador}
              onChange={handleChange}
              className='w-full p-2 rounded bg-zinc-900 text-white border border-zinc-700'
              required
            />
          </div>
          <div className='mb-3'>
            <label className='block text-sm mb-1'>Descripción</label>
            <textarea
              name='descripcion'
              value={nuevoDeporte.descripcion}
              onChange={handleChange}
              className='w-full p-2 rounded bg-zinc-900 text-white border border-zinc-700'
              rows='3'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded'
          >
            Guardar Deporte
          </button>
        </form>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
        {deportes.map((deporte) => (
          <div
            key={deporte.id}
            className='bg-zinc-900 rounded-xl p-4 shadow-md border border-zinc-700'
          >
            <div className='flex justify-between items-center mb-2'>
              <div>
                <h2 className='text-xl font-semibold'>{deporte.nombre}</h2>
                <p className='text-sm text-gray-400'>
                  por {deporte.entrenador}
                </p>
              </div>
            </div>
            <p className='text-sm text-gray-300 mb-1'>ID: {deporte.id}</p>
            <p className='text-sm text-gray-300 mb-1'>
              Descripción: {deporte.descripcion}
            </p>
            <p className='text-sm text-gray-300'>
              Fecha de creación:{" "}
              {new Date(deporte.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      <section>
        <h2 className='text-xl font-bold mb-4'>Clases Agendadas</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {reservas.map((reserva) => (
            <div
              key={reserva.id}
              className='bg-zinc-800 rounded-xl p-4 border border-zinc-700 shadow'
            >
              <div className='mb-2'>
                <p className='text-sm text-gray-400'>Usuario:</p>
                <p className='text-lg font-semibold'>{reserva.usuario}</p>
              </div>
              <div className='mb-2'>
                <p className='text-sm text-gray-400'>Deporte:</p>
                <p className='text-md font-medium'>{reserva.deporte}</p>
                <p className='text-sm text-gray-400'>
                  Entrenador: {reserva.entrenador}
                </p>
              </div>
              <div className='mb-2'>
                <p className='text-sm text-gray-400'>Fecha:</p>
                <p>{reserva.fecha}</p>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Hora:</p>
                <p>
                  {reserva.horaDesde} - {reserva.horaHasta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
