import {
  CalendarIcon,
  FilterIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "../../../../components/ui/Icons"
export default function BookYourSlotSection() {
  return (
    <div className='text-lg text-white bg-dark-blue py-12'>
      <div className='mx-auto w-16 border-t-4 pb-1 border-off-green' />
      <h2 className='text-3xl py-2 text-center font-bold'>Agenda tu hora</h2>
      <p className='text-secondary-text pb-4 text-center font-bold'>
        Nuestro sistema de reservacion permite agendar tus actividades
        preferidas en segundos.
      </p>
      <section className='flex gap-8'>
        <article className='bg-black py-8 px-4 space-y-4 rounded w-96 border-[#2e2e2e] border'>
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
            <div className='[&>label>input]:py-2 [&>label>input]:bg-dark-blue [&>label]:w-42 [&>label]:py-1 [&>label]:gap-2 [&>label>input]:rounded flex space-x-4 [&>label]:flex [&>label]:flex-col'>
              <label>
                Desde
                <input type='date' />
              </label>
              <label>
                Hasta
                <input type='date' />
              </label>
            </div>
          </form>
          <button className='bg-light-green text-black cursor-pointer hover:bg-off-green py-1 space-y-2 rounded w-full'>
            Aplicar filtros
          </button>
        </article>
        <article className='bg-black border-[#2e2e2e] p-6 border flex flex-col w-[700px]'>
          <div className='flex'>
            <CalendarIcon />
            <div className='text-2xl gap-2 flex flex-grow justify-end [&>button]:cursor-pointer [&>button]:px-3 [&>button]:rounded [&>button]:bg-white'>
              <button>
                <LeftArrowIcon />
              </button>
              Mayo 15, 2025
              <button>
                <RightArrowIcon />
              </button>
            </div>
          </div>
          <div className='py-2 border-b-1 border-[#2e2e2e]'>Horarios</div>
          <div className='flex py-4'>
            <div className='py-2 flex flex-grow items-center gap-2'>
              <div className='rounded-full bg-light-green h-3 w-3' />
              <span>Disponible</span>
              <div className='rounded-full bg-[#505050] h-3 w-3' />
              <span>Ocupado</span>
            </div>
            <button className='px-4 rounded-md bg-light-green text-black cursor-pointer'>
              Agendar hora
            </button>
          </div>
        </article>
      </section>
    </div>
  )
}
