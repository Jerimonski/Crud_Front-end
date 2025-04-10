import { BrowserRouter } from "react-router-dom"
import RoutesConfig from "./../routes/RoutesConfig"
import Navbar from "./../components/Navbar/Navbar"
import Footer from "./../components/Footer/Footer"
import { UserProvider } from "../contexts/userContext"

export default function index() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <RoutesConfig />
        <Footer />
      </BrowserRouter>
    </UserProvider>
  )
}
