export default function ScheduleOptions({ hour }) {
  return (
    <button className='w-full duration-300 bg-white text-black py-6  rounded hover:text-light-green hover:border-light-green border-2'>
      {hour}
    </button>
  )
}
