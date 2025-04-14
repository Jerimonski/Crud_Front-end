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
              src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/93/56/42/we-provide-group-lessons.jpg?w=900&h=500&s=1'
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
              src='https://images.squarespace-cdn.com/content/v1/5609a5e7e4b09fa7068369bb/df79f30a-7116-413b-9b34-f8fa8457dd96/1-28-24+CommunityYoga-65.jpg'
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
              src='https://image-tc.galaxy.tf/wijpeg-ci0zqr5bv5tycgdcegb9u1dk3/fitness-center-hotel-orig.jpg?width=1920'
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
              src='https://moren.cr/wp-content/uploads/2021/08/57179913-escuela-de-natacion-piscina-instructor-con-ninos.jpg'
              alt='Clases de Gimnasio'
              className='object-cover absolute h-full rounded-sm opacity-65'
            />
          </Cards>
        </div>
      </div>
    </section>
  )
}
