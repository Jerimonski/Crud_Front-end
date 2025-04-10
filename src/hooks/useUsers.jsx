import axios from "axios"
import { useEffect, useState } from "react"

export default function useUsers() {
  const [users, setUser] = useState([])

  const fetchData = () => {
    return axios
      .get("http://192.168.1.92:3000/usuarios/")
      .then((response) => setUser(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { users }
}
