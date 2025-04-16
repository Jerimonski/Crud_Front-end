import axios from "axios"
import { useEffect, useState } from "react"

export default function useUsers() {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    return axios
      .get("http://localhost:3000/usuarios/")
      .then((response) => setUsers(response.data))
  }
  useEffect(() => {
    fetchData()
  }, [])

  return { users }
}
