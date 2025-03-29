import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Contact from "../pages/ContactPage/Contact"
import SignIn from "./../pages/SignInPage/SignIn"

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signIn' element={<SignIn />} />
    </Routes>
  )
}
