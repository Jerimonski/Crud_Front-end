import {
  CalendarIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "../../../../../components/ui/Icons"
import ScheduleOptions from "./ScheduleOptions"

export default function Schedule() {
  return (
    <article className='bg-black border-[#2e2e2e] p-6 border flex flex-col flex-1 min-w-[300px]'>
      <div className='flex justify-between items-center mb-4'>
        <CalendarIcon />
        <div className='text-2xl font-semibold flex items-center gap-2'>
          <button className='bg-white rounded px-2 py-1'>
            <LeftArrowIcon />
          </button>
          Mayo 15, 2025
          <button className='bg-white rounded px-2 py-1'>
            <RightArrowIcon />
          </button>
        </div>
      </div>
      <div className='py-2 border-b border-[#2e2e2e]'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-6'>
          <ScheduleOptions hour={"9:00 AM"} />
          <ScheduleOptions hour={"10:00 AM"} />
          <ScheduleOptions hour={"12:00 PM"} />
          <ScheduleOptions hour={"1:00 PM"} />
          <ScheduleOptions hour={"3:00 PM"} />
          <ScheduleOptions hour={"4:00 PM"} />
          <ScheduleOptions hour={"5:00 PM"} />
          <ScheduleOptions hour={"7:00 PM"} />
          <ScheduleOptions hour={"8:00 PM"} />
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
