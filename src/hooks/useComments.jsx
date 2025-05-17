import axios from "axios"
import { useEffect, useState } from "react"

export default function useComentarios(deporte) {
  const [comentarios, setComentarios] = useState([])

  const fetchComentarios = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/comentarios?deporte=${deporte}`
      )
      setComentarios(res.data)
    } catch (error) {
      console.error("Error al obtener comentarios:", error)
    }
  }

  const agregarComentario = async (comentario) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/comentarios`,
        comentario
      )
      fetchComentarios() // Actualiza la lista después del post
    } catch (error) {
      console.error("Error al agregar comentario:", error)
    }
  }

  useEffect(() => {
    fetchComentarios()
  }, [deporte])

  return { comentarios, agregarComentario }
}
