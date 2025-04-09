import React from "react"
import Cards from "./components/Cards"

export default function OurActivitiesSection() {
  return (
    <section className='text-lg bg-black text-white py-20'>
      <div className='mx-auto w-16 border-t-4 pb-1 border-off-green' />
      <h2 className='text-3xl py-2 text-center font-bold'>Our Activities</h2>
      <p className='text-secondary-text pb-4 text-center font-bold'>
        ¡Vive la experiencia! Reserva ya entre nuestras mejores clases y
        actividades deportivas.
      </p>
      <div className='flex justify-center gap-6 py-8'>
        <Cards
          title={"TENIS"}
          text={
            "Ven a reservar nuestras canchas profesionales para tus encuentros con amigos."
          }
        />
        <Cards
          title={"YOGA"}
          text={
            "Únase a nuestras clases de yoga dirigidas por expertos para todos los niveles de experiencia."
          }
        />
        <Cards
          title={"GIMNASIO"}
          text={
            "Accede a equipos de última generación y sesiones de entrenamiento personal."
          }
        />
        <Cards
          title={"NATACIÓN"}
          text={
            "Disfrute de nuestra piscina olímpica con carriles ademas de clases personalizadas."
          }
        />
      </div>
    </section>
  )
}
