export default function JoinNowSection() {
  return (
    <section className='bg-[#0F172A] text-white py-18 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8'>
      {}
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-4xl font-bold leading-tight'>
          ¿Preparado para <span className='text-light-green'>Elevar</span>
          <br />
          Tu Experiencia Deportiva?🏃
        </h2>
        <p className='text-gray-300'>
          Miles de miembros ya viven la experiencia en nuestras instalaciones de
          primer nivel. ¡Agenda tu primera sesión y siente la diferencia desde
          el primer día!
        </p>
        <div className='flex gap-4'>
          <button className='bg-light-green text-black px-6 py-2 rounded hover:scale-110 duration-400 font-semibold'>
            Reserva Ya!
          </button>
        </div>

        {/* Booking info */}
        <div className='flex items-center gap-4 pt-4'>
          <div className='flex -space-x-2'></div>
        </div>
      </div>

      {/* Imagen + Testimonio */}
      <div className='md:w-1/2 relative'>
        <div className='w-[300px] h-[300px] bg-white/10 border border-white/20 rounded-xl mx-auto' />
        <div className='bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[250px] absolute bottom-0 left-8'>
          <div className='text-yellow-300 text-sm mb-1'>★★★★★</div>
          <p className='text-sm italic text-gray-200'>
            “Reservar aquí es facilísimo. Llevo 3 meses asistiendo y no podría
            estar más satisfecho.”
          </p>
          <p className='text-xs mt-2 text-yellow-300'>
            - Sebastian Olivares, Miembro
          </p>
        </div>
        <button className='absolute bottom-4 right-4 bg-light-green hover:bg-off-green duration-300 text-black px-4 py-2 rounded font-bold shadow'>
          Únete Ahora!
        </button>
      </div>
    </section>
  )
}
