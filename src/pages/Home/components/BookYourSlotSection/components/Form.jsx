import { FilterIcon } from "../../../../../components/ui/Icons"

export default function Form() {
  return (
    <section className='bg-black py-8 px-4 space-y-4 rounded w-full max-w-[500px] border border-[#2e2e2e]'>
      <FilterIcon />
      <form className='space-y-4 py-2 flex flex-col [&>label]:gap-2 [&>label]:py-1 [&>label]:flex [&>label]:flex-col'>
        <label>
          Actividad
          <select type='text' className='bg-dark-blue py-2 rounded'>
            <option>-- Elige una opción --</option>
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
        <label>
          Instructor (Opcional)
          <select className='bg-dark-blue py-2' type='text'>
            <option>-- Elige una opción --</option>
            <option>Tyron Gonzales</option>
            <option>gordon ramsay</option>
            <option>muhammad ali</option>
            <option>Ojirilini mirilinili</option>
          </select>
        </label>
        <div className='[&>label>input]:py-2 [&>label>input]:bg-dark-blue [&>label]:w-full [&>label]:py-1 [&>label]:gap-2 [&>label>input]:rounded flex space-x-4 [&>label]:flex [&>label]:flex-col'>
          <label>
            Desde
            <select className='bg-dark-blue py-2'>
              <option>8:00 AM</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 AM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>3:00 PM</option>
              <option>4:00 PM</option>
              <option>5:00 PM</option>
            </select>
          </label>
          <label>
            Hasta
            <select className='bg-dark-blue py-2'>
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
            </select>
          </label>
        </div>
      </form>
      <button className='duration-300 bg-light-green text-black cursor-pointer hover:bg-off-green py-1 space-y-2 rounded w-full'>
        Aplicar filtros
      </button>
    </section>
  )
}
