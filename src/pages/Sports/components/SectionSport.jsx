export default function Section() {
  return (
    <div className='mx-auto text-white'>
      <section className='bg-black text-center'>
        <h1 className='text-2xl'>Descubre tu pasion por los deportes</h1>
        <p>explora</p>
      </section>
      <section className='bg-dark-blue flex justify-center'>
        <div className='py-12'>
          <div className='w-96'>
            <h2 className='text-2xl'>Tennis</h2>
            <p>
              Experience the thrill of tennis on our professional courts with
              expert coaching for all skill levels. Our state-of-the-art
              facilities and passionate instructors will help you master your
              technique and enjoy the game like never before.
            </p>
            <div className='[&>span]:bg-[#131313] [&>span]:text-sm [&>span]:p-2 flex gap-4'>
              <span>All skill levels</span>
              <span>Flexible Schedule</span>
              <span>Pro coaching</span>
            </div>
          </div>
        </div>
        <img src='ImagenPrincipal.jpg' alt='' className='w-80 object-cover' />
      </section>
    </div>
  )
}
