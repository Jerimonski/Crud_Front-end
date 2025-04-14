import Form from "./components/Form"
import Schedule from "./components/Schedule"

export default function BookYourSlotSection() {
  return (
    <div className='text-lg text-white bg-dark-blue py-12'>
      <div className='mx-auto w-16 border-t-4 pb-1 border-off-green' />
      <h2 className='text-3xl py-2 text-center font-bold'>Agenda tu hora</h2>
      <p className='text-secondary-text pb-4 text-center font-bold'>
        Nuestro sistema de reservacion permite agendar tus actividades
        preferidas en segundos.
      </p>
      <section className='flex justify-center gap-8'>
        <Form />
        <Schedule />
      </section>
    </div>
  )
}
