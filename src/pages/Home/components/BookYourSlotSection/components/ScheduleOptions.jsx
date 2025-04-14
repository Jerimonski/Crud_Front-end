export default function ScheduleOptions({ hour }) {
  return (
    <button className='duration-300 bg-white text-black py-6 px-14 rounded hover:text-light-green hover:border-light-green border-2'>
      {hour}
    </button>
  )
}
