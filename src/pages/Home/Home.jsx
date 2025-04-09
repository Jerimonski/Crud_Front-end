import React from "react"
import WelcomeToSection from "./components/WelcomeToSection/WelcomeToSection"
import OurActivitiesSection from "./components/OurActivitiesSection/OurActivitiesSection"
import BookYourSlotSection from "./components/BookYourSlotSection/BookYourSlotSection"
import JoinNowSection from "./components/JoinNowSection/JoinNowSection"

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-red-200'>
      <h1 className='text-2xl'>Home</h1>
      <WelcomeToSection />
      <OurActivitiesSection />
      <BookYourSlotSection />
      <JoinNowSection />
    </div>
  )
}
