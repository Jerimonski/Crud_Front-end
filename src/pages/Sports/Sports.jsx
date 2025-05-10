import SecondSportSection from "./components/SecondSportSection"
import SportsSection from "./components/SportsSection"

export default function Sports() {
  return (
    <div className='h-full'>
      <section className='bg-black text-center text-white space-y-4 pt-12 pb-20'>
        <h1 className='text-4xl font-bold'>
          Descubre tu <span className='text-light-green'>pasión</span> por los
          deportes
        </h1>
        <p className='w-1/2 mx-auto'>
          Explora nuestra selección de actividades deportivas diseñadas para
          todos, en una comunidad de apoyo que fomenta el crecimiento, el
          bienestar y la excelencia.
        </p>
      </section>
      <SportsSection title='Tennis' img={"ClaseDeTenis.jpg"}>
        Reserva tu clase de tenis y mejora tu técnica en nuestras canchas
        profesionales. Con entrenadores expertos y horarios flexibles, te
        ofrecemos una experiencia personalizada para todos los niveles. ¡Asegura
        tu lugar y vive la emoción del tenis!
      </SportsSection>
      <SecondSportSection
        title='Natacion'
        img={"ClasesDeNatacion.jpg"}
        label2='Acceso todo el año'
        label3='Instructores Certificados'
      >
        Agenda tu clase en nuestra piscina olímpica y mejora tu nivel con
        programas adaptados a cada etapa del aprendizaje. Desde seguridad en el
        agua hasta técnica avanzada, todo está listo para que reserves tu
        espacio y nades con confianza.
      </SecondSportSection>
      <SportsSection
        title='Baloncesto'
        img={"ClasesDeBaloncesto.jpg"}
        label2='Torneos Regulares'
      >
        Reserva tu cancha y únete a partidas emocionantes o entrenamientos
        guiados por expertos. Nuestro sistema de agendamiento te permite acceder
        fácilmente a horarios disponibles, ya sea para jugar entre amigos o
        practicar en ligas competitivas.
      </SportsSection>
      <SecondSportSection
        title='Yoga'
        img={"ClasesDeYoga.jpg"}
        label3='Instructores Profesionales'
      >
        Agenda tu sesión de yoga en un ambiente diseñado para el equilibrio y la
        serenidad. Ofrecemos clases en distintos horarios y niveles, guiadas por
        instructores certificados. Reserva fácilmente y transforma tu día con
        bienestar y tranquilidad.
      </SecondSportSection>
      <SportsSection title='Gimnasio' img={"ClasesDeGimnasio.jpg"}>
        Reserva tu cancha y únete a partidas emocionantes o entrenamientos
        guiados por expertos. Nuestro sistema de agendamiento te permite acceder
        fácilmente a horarios disponibles, ya sea para jugar entre amigos o
        practicar en ligas competitivas.
      </SportsSection>
    </div>
  )
}
