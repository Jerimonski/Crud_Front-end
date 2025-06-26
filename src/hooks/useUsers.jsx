import axios from "axios"
import { useEffect, useState } from "react"

export default function useUsers() {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    return axios
      .get(`${import.meta.env.VITE_API_URL}/usuarios`)
      .then((response) => setUsers(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { users }
}
