import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Contact from "../pages/ContactPage/Contact"
import AboutUs from "../pages/AboutUs/AboutUs"
import SignIn_LogInPage from "./../pages/SignIn-LogInPage/SignIn-LogInPage"
import Sports from "../pages/Sports/Sports"
import SportPages from "../pages/Sports/components/SportPages"
import AdminDashBoard from "../pages/AdminDashBoard"

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/adminDashBoard' element={<AdminDashBoard />} />
      <Route path='/deportes' element={<Sports />} />
      <Route path='/deportes/:deporte' element={<SportPages />} />
      <Route path='/signIn-logIn' element={<SignIn_LogInPage />} />
    </Routes>
  )
}
