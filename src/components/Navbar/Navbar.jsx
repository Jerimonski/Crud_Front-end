import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className='py-4 px-10 w-full bg-black text-white flex items-center top-0 justify-between'>
      <div className='flex flex-grow basis-0'>
        <Link className='text-2xl' to={"/Home"}>
          NAME
        </Link>
      </div>
      <nav>
        <ul className='flex [&>li]:px-4 [&>li]:py-2 [&>li]:hover:bg-white [&>li]:hover:text-black [&>li]:rounded [&>li]:duration-300'>
          <li>
            <Link to={"/Home"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/aboutUs"}>About Us</Link>
          </li>
        </ul>
      </nav>
      <nav className='flex flex-grow justify-end basis-0 [&>button]:px-4 [&>button]:py-2 [&>button]:rounded [&>button]:duration-300 gap-4'>
          <Link to={"/Signin"}>
        <button className='flex items-center gap-3 hover:bg-white hover:text-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='15px'
            height='20px'
          >
            <path
              fill='currentColor'
              d='M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8z'
            ></path>
          </svg>
          Iniciar Sesión
        </button>
          </Link>
        <button className='hover:brightness-80 bg-light-green text-black'>
          Book Now
        </button>
      </nav>
    </header>
  )
}
