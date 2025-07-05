import { useState } from "react"
import Calendar from "../../../../../components/Calendar"
import { FilterIcon } from "../../../../../components/ui/Icons"
import { useUserContext } from "../../../../../contexts/userContext"

export default function Form() {
  const { currentUser } = useUserContext()

  const [actividad, setActividad] = useState("")
  const [fecha, setFecha] = useState(null)
  const [horaDesde, setHoraDesde] = useState("")
  const [horaHasta, setHoraHasta] = useState("")

  function convertirHora(horaStr) {
    const [hora, sufijo] = horaStr.split(" ")
    let [h, m] = hora.split(":").map(Number)
    if (sufijo === "PM" && h !== 12) h += 12
    if (sufijo === "AM" && h === 12) h = 0
    return h * 60 + m
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!currentUser) {
      alert("Debes iniciar sesión para agendar una clase ❌")
      return
    }

    const inicio = convertirHora(horaDesde)
    const fin = convertirHora(horaHasta)

    if (inicio >= fin) {
      alert("La hora de inicio debe ser menor que la hora de término ❌")
      return
    }

    if (!actividad || !fecha || !horaDesde || !horaHasta) {
      alert("Debes completar todos los campos ❗")
      return
    }

    try {
      const res = await fetch("/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          usuario_id: currentUser.id,
          deporte: actividad,
          fecha: fecha.toISOString().split("T")[0],
          hora_inicio: horaDesde,
          hora_fin: horaHasta,
        }),
      })

      if (!res.ok) throw new Error("Error al reservar")

      alert("Reserva exitosa! ✅")
      // limpiar si quieres
    } catch (err) {
      alert("No se pudo reservar 😢: " + err.message)
    }
  }

  return (
    <section className='bg-black py-8 px-4 space-y-4 rounded w-full max-w-[500px] border border-[#2e2e2e]'>
      <FilterIcon />
      <form
        onSubmit={handleSubmit}
        className='space-y-4 py-2 flex flex-col [&>label]:gap-2 [&>label]:py-1 [&>label]:flex [&>label]:flex-col'
      >
        <label>
          Actividad
          <select
            value={actividad}
            onChange={(e) => setActividad(e.target.value)}
            className='bg-dark-blue py-2 rounded'
          >
            <option value=''>-- Elige una opción --</option>
            <option>Tenis</option>
            <option>Yoga</option>
            <option>Gimnasio</option>
            <option>Natacion</option>
          </select>
        </label>
        <label>
          Fecha
          <input className='bg-dark-blue py-2' type='date' />
        </label>
        <div className='[&>label>input]:py-2 [&>label>input]:bg-dark-blue [&>label]:w-full [&>label]:py-1 [&>label]:gap-2 [&>label>input]:rounded flex space-x-4 [&>label]:flex [&>label]:flex-col'>
          <label>
            Desde
            <select
              value={horaDesde}
              onChange={(e) => setHoraDesde(e.target.value)}
              className='bg-dark-blue py-2'
            >
              <option value=''>--</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 AM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
            </select>
          </label>
          <label>
            Hasta
            <select
              value={horaHasta}
              onChange={(e) => setHoraHasta(e.target.value)}
              className='bg-dark-blue py-2'
            >
              <option value=''>--</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 AM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
            </select>
          </label>
        </div>
        <button
          type='submit'
          className='duration-300 bg-light-green text-black cursor-pointer hover:bg-off-green py-1 space-y-2 rounded w-full'
        >
          Agendar clase
        </button>
      </form>
    </section>
  )
}
