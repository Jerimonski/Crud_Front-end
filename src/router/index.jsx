import { BrowserRouter } from "react-router-dom"
import RoutesConfig from "./../routes/RoutesConfig"
import Navbar from "./../components/Navbar/Navbar"
import Footer from "./../components/Footer/Footer"

export default function index() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesConfig />
      <Footer />
    </BrowserRouter>
  )
}
