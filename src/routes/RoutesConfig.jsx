import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Contact from "../pages/ContactPage/Contact"
import AboutUs from "../pages/AboutUs/AboutUs"
import SignIn_LogInPage from "./../pages/SignIn-LogInPage/SignIn-LogInPage"
import Sports from "../pages/Sports/Sports"

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/deportes' element={<Sports />} />
      <Route path='/signIn-logIn' element={<SignIn_LogInPage />} />
    </Routes>
  )
}
