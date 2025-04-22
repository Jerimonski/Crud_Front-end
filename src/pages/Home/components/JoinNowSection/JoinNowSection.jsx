export default function JoinNowSection() {
  return (
    <section className='bg-[#0F172A] text-white py-24 px-4'>
      <div className='max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='w-full md:w-1/2 space-y-6 px-4'>
          <hr class='w-14 border-t-3 rounded border-2 border-light-green' />
          <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
            ¿Preparado para <span className='text-light-green'>Elevar</span>
            <br className='hidden sm:block' />
            Tu Experiencia Deportiva? 🏃
          </h2>
          <p className='text-gray-300 text-base md:text-lg'>
            Miles de miembros ya viven la experiencia en nuestras instalaciones
            de primer nivel. ¡Agenda tu primera sesión y siente la diferencia
            desde el primer día!
          </p>
          <div className='flex gap-4 flex-wrap'>
            <button className='bg-light-green text-black px-6 py-2 rounded hover:scale-105 duration-300 font-semibold'>
              Reserva Ya!
            </button>
          </div>
        </div>

        <div className='w-full md:w-1/2 relative px-4'>
          <div className='rotate-5 w-full max-w-[300px] h-[400px] bg-white/10 border border-white/20 rounded-xl mx-auto'>
            <img
              src='/ClasesDeBaloncesto.jpg'
              alt='Michael Jackson'
              className='relative object-cover w-full h-full'
            />
            <div className='-rotate-8 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[250px] absolute -bottom-10 max-md:-bottom-10 -left-20 max-md:-left-10'>
              <div className='text-yellow-300 text-sm mb-1'>★★★★★</div>
              <p className='text-sm italic text-gray-200'>
                “Reservar aquí es facilísimo. Llevo 3 meses asistiendo y no
                podría estar más satisfecho.”
              </p>
              <p className='text-xs mt-2 text-yellow-300'>
                - Sebastian Olivares, Miembro
              </p>
            </div>
            <button className='absolute max-md:right-6 -bottom-6 -right-6 bg-light-green hover:bg-off-green duration-300 text-black px-4 py-2 rounded font-bold shadow max-md:right-1/2 max-md:translate-x-1/2'>
              Únete Ahora!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
