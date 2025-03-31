import React from "react"
import Cards from "./components/Cards"


export default function OurActivitiesSection() {
  return <div className='text-lg'>{/* Título y Descripción */}
   
  <h2 className="text-3xl font-bold">Our Activities</h2>
  <p className="text-gray-600 mt-2">
    Explore our wide range of sports activities and classes available for booking.
  </p>

  {/* Contenedor de Tarjetas */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-6">
    {/* Tarjetas de Actividad */}
     <Cards title={"TENIS"} text={"Ven a reservar nuestras canchas profesionales para tus encuentros con amigos.🎾😊"}/>
     <Cards title={"YOGA"} text={"Únase a nuestras clases de yoga dirigidas por expertos para todos los niveles de experiencia.🧘‍♂️🧘‍♀️"}/>
     <Cards title={"GIMNASIO"} text={"Accede a equipos de última generación y sesiones de entrenamiento personal.💪🏋️‍♂️🏋️‍♀️"}/>
     <Cards title={"NATACIÓN"} text={"Disfrute de nuestra piscina olímpica con carriles ademas de clases personalizadas.🏊"}/>
  </div>

  {/* Botón de Ver Más */}
  <div className="text-center mt-6">
    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg">
      View All Activities
    </button>
  </div></div>
}
