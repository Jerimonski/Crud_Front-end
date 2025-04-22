import Form from "./components/Form"
import Schedule from "./components/Schedule"

export default function BookYourSlotSection() {
  return (
    <section className='text-lg text-white bg-dark-blue py-20 px-4'>
      <hr className='mx-auto w-16 border-t-3 rounded border-2 border-light-green' />
      <h2 className='text-3xl py-2 text-center font-bold'>Book Your Slot</h2>
      <p className='text-secondary-text pb-4 text-center font-bold max-w-xl mx-auto'>
        Our easy-to-use reservation system allows you to book your preferred
        activity in seconds.
      </p>
      <div className='max-w-[1800px] mx-auto px-4'>
        <div className='flex flex-wrap justify-center gap-8 py-8 lg:flex-nowrap'>
          <Form />
          <Schedule />
        </div>
      </div>
    </section>
  )
}
