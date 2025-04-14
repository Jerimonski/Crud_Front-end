import {
  CalendarIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "../../../../../components/ui/Icons"
import ScheduleOptions from "./ScheduleOptions"

export default function Schedule() {
  return (
    <article className='bg-black border-[#2e2e2e] p-6 border flex flex-col w-max'>
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
      <div className='py-2 border-b-1 border-[#2e2e2e]'>
        <div className='grid grid-cols-4 py-6 [&>div]:px-2 [&>div]:space-y-4 [&>div]:flex [&>div]:flex-col'>
          <div>
            <ScheduleOptions hour={"9:00 AM"} />
            <ScheduleOptions hour={"1:00 PM"} />
            <ScheduleOptions hour={"5:00 PM"} />
          </div>
          <div>
            <ScheduleOptions hour={"10:00 PM"} />
          </div>
          <div>
            <ScheduleOptions hour={"11:00 AM"} />
            <ScheduleOptions hour={"3:00 PM"} />
          </div>
          <div>
            <ScheduleOptions hour={"12:00 AM"} />
            <ScheduleOptions hour={"4:00 PM"} />
          </div>
        </div>
      </div>
      <div className='flex py-4'>
        <div className='py-2 flex flex-grow items-center gap-2'>
          <div className='rounded-full bg-light-green h-3 w-3' />
          <span>Disponible</span>
          <div className='rounded-full bg-[#505050] h-3 w-3' />
          <span>Ocupado</span>
        </div>
        <button className='px-4 rounded-md bg-light-green text-black cursor-pointer hover:bg-off-green duration-300'>
          Agendar hora
        </button>
      </div>
    </article>
  )
}
