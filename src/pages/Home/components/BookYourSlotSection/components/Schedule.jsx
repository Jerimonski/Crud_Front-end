import {
  CalendarIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "../../../../../components/ui/Icons"
import ScheduleOptions from "./ScheduleOptions"
import { useEffect, useState } from "react"

export default function Schedule({ fechaSeleccionada }) {
  const [reservas, setReservas] = useState([])

  const horas = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ]

  function convertirHora(horaStr) {
    const [hora, sufijo] = horaStr.split(" ")
    let [h, m] = hora.split(":").map(Number)
    if (sufijo === "PM" && h !== 12) h += 12
    if (sufijo === "AM" && h === 12) h = 0
    return h * 60 + m
  }

  const obtenerReservas = async () => {
    try {
      const res = await fetch(`/api/reservas?fecha=${fechaSeleccionada}`)
      const data = await res.json()
      setReservas(data)
    } catch (err) {
      console.error("Error al cargar reservas", err)
    }
  }

  useEffect(() => {
    if (fechaSeleccionada) {
      obtenerReservas()
    }
  }, [fechaSeleccionada])

  const horaOcupada = (hora) => {
    const minutos = convertirHora(hora)
    return reservas.some((reserva) => {
      const inicio = convertirHora(reserva.hora_inicio)
      const fin = convertirHora(reserva.hora_fin)
      return minutos >= inicio && minutos < fin
    })
  }

  return (
    <article className='bg-black border-[#2e2e2e] p-6 border flex flex-col flex-1 min-w-[300px]'>
      <div className='flex justify-between items-center mb-4'>
        <CalendarIcon ClassName={"w-8"} />
        <div className='text-2xl font-semibold flex items-center gap-2'>
          <button className='bg-white rounded px-2 py-1'>
            <LeftArrowIcon />
          </button>
          {fechaSeleccionada}
          <button className='bg-white rounded px-2 py-1'>
            <RightArrowIcon />
          </button>
        </div>
      </div>
      <div className='py-2 border-b border-[#2e2e2e]'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
          {horas.map((hora) => (
            <ScheduleOptions
              key={hora}
              hour={hora}
              ocupado={horaOcupada(hora)}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 py-4'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <div className='rounded-full bg-light-green h-3 w-3' />
            <span>Disponible</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='rounded-full bg-[#505050] h-3 w-3' />
            <span>Ocupado</span>
          </div>
        </div>
        <button className='px-6 py-2 bg-light-green text-black rounded hover:bg-off-green transition duration-300'>
          Agendar hora
        </button>
      </div>
    </article>
  )
}
