import { useEffect, useState } from "react";
import axios from "axios";

export default function WelcomeToSection() {
  const [user, setUser] = useState([]);

  const dataFetch = () => {
    return axios
      .get("http://localhost:3000/usuarios/")
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    dataFetch();
  }, []);

  // Mostrar los datos de usuario en consola cuando cambian
  useEffect(() => {
    console.log("Usuarios cargados:", user);
  }, [user]);

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
            Our mission is to provide a premium sports experience for everyone,
            from beginners to professionals. With state-of-the-art facilities
            and expert instructors, we're committed to helping you achieve your
            fitness goals.
          </p>
          <p className='mb-6 text-gray-300'>
            Whether you’re looking to play tennis, join a yoga class, or hit the
            gym, our easy-to-use reservation system ensures you can book your
            preferred activity in seconds.
          </p>
          <button className='bg-green-500 text-black px-5 py-2 rounded-md hover:bg-green-400 transition duration-200'>
            Learn More About Us
          </button>

          {/* Mostrar usuarios si quieres incluirlos */}
          {user.length > 0 && (
            <div className='mt-6'>
              <h2 className='text-xl font-semibold mb-2'>
                Usuarios registrados:
              </h2>
              <ul className='list-disc list-inside text-gray-300'>
                {user.map((u, index) => (
                  <li key={index}>{u.nombre}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Cuadros de imagen a la derecha */}
        <div className='grid grid-cols-2 gap-4'>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className='bg-gray-300 w-full h-40 flex items-center justify-center rounded-md'
            >
              <span className='text-gray-500 text-2xl'>🖼</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
