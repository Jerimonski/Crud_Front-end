import React, { useEffect, useState } from "react"

import WelcomeToSection from "./components/WelcomeToSection/WelcomeToSection"
import OurActivitiesSection from "./components/OurActivitiesSection/OurActivitiesSection"
import BookYourSlotSection from "./components/BookYourSlotSection/BookYourSlotSection"
import JoinNowSection from "./components/JoinNowSection/JoinNowSection"
import HomeScreen from "./components/HomeScreen/HomeScreen"
import axios from "axios"

export default function Home() {
  const [user, setUser] = useState([])

  const dataFetch = () => {
    return axios
      .get("http://localhost:3000/usuarios/")
      .then((response) => setUser(response.data))
  }
  useEffect(() => {
    dataFetch()
  }, [])

  return (
    <div className='w-full min-h-screen bg-red-200'>
      {user &&
        user.map((user, index) => {
          return (
            <div key={index}>
              {user.nombre} {user.email} {user.contraseña}
            </div>
          )
        })}
      <HomeScreen />
      <WelcomeToSection />
      <OurActivitiesSection />
      <BookYourSlotSection />
      <JoinNowSection />
    </div>
  )
}
