import { Link } from "react-router-dom"
import { useUserContext } from "../../contexts/userContext"
import { LogIn } from "../ui/Icons"

export default function Navbar() {
  const { currentUser } = useUserContext()

  return (
    <header className='font-Inter py-4 px-10 md:px-18 w-full bg-black text-white flex items-center top-0 justify-between'>
      <div className='flex flex-grow basis-0'>
        <Link className='flex items-center gap-2' to={"/Home"}>
          <div className='w-14 h-10'>
            <img src='/LogoBookMyFit.png' alt='LogoBookMyFit' />
          </div>
          <span className='font-semibold border-b-2 border-light-green'>
            BookMyFit
          </span>
        </Link>
      </div>

      <nav>
        <ul className='flex cursor-pointer w-full text-sm text-center [&>li]:w-24 [&>li]:py-2 [&>li]:hover:bg-white [&>li]:hover:text-black [&>li]:rounded [&>li]:duration-300'>
          <li>
            <Link className='px-4 py-2' to={"/Home"}>
              Home
            </Link>
          </li>
          <li>
            <Link className='px-4 py-2' to={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className='px-4 py-2' to={"/aboutUs"}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>

      <nav className='text-sm flex flex-grow justify-end basis-0 [&>button]:cursor-pointer [&>button]:rounded [&>button]:duration-300 gap-4'>
        {currentUser ? (
          <div className='flex items-center gap-3 px-4 py-2 bg-light-green text-black rounded'>
            <div>
              <p className='font-semibold'>{currentUser.nombre}</p>
              <p className='text-xs'>{currentUser.email}</p>
            </div>
          </div>
        ) : (
          <button className='hover:bg-white hover:text-black'>
            <Link
              className='flex items-center gap-3 px-4 py-2'
              to={"/signIn-logIn"}
            >
              <LogIn />
              Iniciar Sesión
            </Link>
          </button>
        )}

        <button className='hover:bg-off-green bg-light-green text-black'>
          <Link className='px-4 py-2 font-semibold'>Reserva Ya!</Link>
        </button>
      </nav>
    </header>
  )
}
