import Baloncesto from "./components/Baloncesto"
import Tennis from "./components/Tennis"
export default function Sports() {
  return (
    <div className='h-full'>
      <section className='bg-black text-center text-white'>
        <h1 className='text-2xl'>Descubre tu pasion por los deportes</h1>
        <p>explora</p>
      </section>
      <Tennis />
      <Baloncesto />
    </div>
  )
}
