import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className='w-screen bg-blue-200'>
      <h2 className='text-2xl'>Navbar Links</h2>
      <ul>
        <li>
          <Link to={"/Home"}>Go to Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Go to Conctact</Link>
        </li>
        <li>
          <Link to={"/signIn"}>Go to Sign In</Link>
        </li>
      </ul>
    </div>
  )
}
