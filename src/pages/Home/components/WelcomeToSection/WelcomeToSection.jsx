export default function WelcomeToSection() {
  return (
    <div className='bg-[#0f172a] text-white min-h-screen flex items-center justify-center px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full items-center'>
        {/* Texto a la izquierda */}
        <div>
          <div className='border-t-2 border-green-500 w-14 mb-4'></div>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>
            Welcome to <span className='text-white'>SportsCenter</span>
          </h1>
          <p className='mb-4 text-gray-300'>
            Nuestra misión es brindar una experiencia deportiva de primer nivel
            para todos, desde principiantes hasta profesionales. Con
            instalaciones de vanguardia e instructores expertos, nos
            comprometemos a ayudarte a alcanzar tus objetivos de fitness.
          </p>
          <p className='mb-6 text-gray-300'>
            Ya sea que quieras jugar al tenis, unirte a una clase de yoga o ir
            al gimnasio, nuestro sistema de reservas fácil de usar te garantiza
            que podrás reservar tu actividad preferida en segundos.
          </p>
          <button className='bg-green-500 text-black px-5 py-2 rounded-md font-bold transform hover:scale-105 hover:bg-green-400 transition duration-200 ease-in-out'>
            Conozca más sobre nosotros
          </button>
        </div>

        {/* Cuadros de imagen a la derecha */}
        <div className='grid grid-cols-2 gap-4'>
          {[
            "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/d96f/live/e6230a40-5be1-11ef-b970-9f202720b57a.jpg.webp",
            "https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/OLI%20SCARFF%20%20AFP.jpg?h=69f2b9d0&itok=YH6Hv_Ol",
            "https://www.veritasint.com/blog/wp-content/uploads/2020/01/deportista-de-elite.jpg",
            "https://valgo.servicioapps.com/uploads/app/163/elements/1/1086image1713171478o.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className='w-full h-40 overflow-hidden rounded-md shadow-md'
            >
              <img
                src={src}
                alt={`Actividad ${i + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
