import { createContext, useState, useContext, useEffect } from "react"
import { jwtDecode } from "jwt-decode"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const decoded = jwtDecode(token)
        setCurrentUser(decoded)
      } catch (error) {
        console.error("Token inválido 🥺", error)
        localStorage.removeItem("token")
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
