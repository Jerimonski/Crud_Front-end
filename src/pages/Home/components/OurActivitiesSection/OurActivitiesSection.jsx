import React from "react"
import Cards from "./components/Cards"

export default function OurActivitiesSection() {
  return (
    <section className='text-lg bg-black text-white py-20'>
      <div className='px-20 max-md:px-10'>
        <hr className='mx-auto w-16 border-t-3 rounded border-2 border-light-green' />
        <h2 className='text-3xl py-2 text-center font-bold'>
          Nuestras Actividades
        </h2>
        <p className='text-secondary-text pb-4 text-center font-bold'>
          ¡Vive la experiencia! Reserva ya entre nuestras mejores clases y
          actividades deportivas.
        </p>
        <div className='flex justify-center gap-6 py-8 flex-wrap'>
          <Cards
            title={"TENIS"}
            text={
              "Ven a reservar nuestras canchas profesionales para tus encuentros con amigos."
            }
          >
            <img
              src='/ClaseDeTenis.jpg'
              alt='Clases de tenis'
              className='object-cover absolute h-full rounded-sm opacity-65'
            />
          </Cards>

          <Cards
            title={"YOGA"}
            text={
              "Únase a nuestras clases de yoga dirigidas por expertos para todos los niveles de experiencia."
            }
          >
            <img
              src='/ClasesDeYoga.jpg'
              alt='Clases de yoga'
              className='object-cover absolute h-full rounded-sm opacity-65'
            />
          </Cards>
          <Cards
            title={"GIMNASIO"}
            text={
              "Accede a equipos de última generación y sesiones de entrenamiento personal."
            }
          >
            <img
              src='/ClasesDeGimnasio.jpg'
              alt='Clases de Gimnasio'
              className='object-cover absolute h-full rounded-sm opacity-65'
            />
          </Cards>
          <Cards
            title={"NATACIÓN"}
            text={
              "Disfrute de nuestra piscina olímpica con carriles ademas de clases personalizadas."
            }
          >
            <img
              src='/ClasesDeNatacion.jpg'
              alt='Clases de Gimnasio'
              className='object-cover absolute h-full rounded-sm opacity-65'
            />
          </Cards>
        </div>
      </div>
    </section>
  )
}
