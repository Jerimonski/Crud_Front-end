import { Link } from "react-router-dom"
import ItemsList from "./components/ItemsList"
import SocialMediaIcons from "./../ui/SocialMediaIcons"

export default function Footer() {
  return (
    <footer className='font-Inter w-full py-12 bg-black text-white absolute bottom-0'>
      <div className='grid grid-cols-4'>
        <div className='space-y-4 space-x-4 px-4'>
          <Link className='flex items-center' to={"/Home"}>
            <div className='w-22 h-12'>
              <img src='/LogoBookMyFit.png' alt='LogoBookMyFit' />
            </div>
            <span className='font-semibold'>BookMyFit</span>
          </Link>
          <p className='text-tertiary-text text-xs'>
            Nuestra misión es facilitar una experiencia deportiva accesible para
            todos, desde aquellos que dan sus primeros pasos hasta los atletas
            experimentados.
          </p>
          <SocialMediaIcons />
        </div>
        <ItemsList title='Activities'>
          <li>Tennis</li>
          <li>Yoga</li>
          <li>Gym</li>
          <li>Swimming</li>
          <li>Basketball</li>
        </ItemsList>
        <ItemsList title='Company'>
          <li>About us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Press</li>
          <li>Contact</li>
        </ItemsList>
        <ItemsList title='Legal'>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>GDPR</li>
        </ItemsList>
      </div>
      <p className='pt-12 mt-12 border-t-2 text-center border-dark-blue text-tertiary-text'>
        &copy; 2025 BookMyFit. Todos los derechos reservados.
      </p>
    </footer>
  )
}
