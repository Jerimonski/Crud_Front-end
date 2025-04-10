import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Contact from "../pages/ContactPage/Contact"
import LogIn from "../pages/LogInPage/LogIn"
import AboutUs from "../pages/AboutUs/AboutUs"

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/logIn' element={<LogIn />} />
    </Routes>
  )
}
