import WelcomeToSection from "./components/WelcomeToSection/WelcomeToSection"
import OurActivitiesSection from "./components/OurActivitiesSection/OurActivitiesSection"
import BookYourSlotSection from "./components/BookYourSlotSection/BookYourSlotSection"
import JoinNowSection from "./components/JoinNowSection/JoinNowSection"
import HomeScreen from "./components/HomeScreen/HomeScreen"

export default function Home() {
  return (
    <div className='w-full min-h-screen'>
      <HomeScreen />
      <WelcomeToSection />
      <OurActivitiesSection />
      <BookYourSlotSection />
      <JoinNowSection />
    </div>
  )
}
