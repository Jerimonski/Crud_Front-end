import axios from "axios"
import { useEffect, useState } from "react"

export default function useComments(deporte_id) {
  const [comentarios, setComentarios] = useState([])

  const fetchComentarios = async () => {
    if (!deporte_id) return
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/comentarios/deporte?deporte=${deporte_id}`
      )
      setComentarios(res.data)
    } catch (error) {
      console.error("Error al obtener comentarios:", error)
    }
  }

  const agregarComentario = async ({
    usuario_id,
    contenido,
    fecha,
    valoracion = 5,
  }) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/comentarios`, {
        usuario_id,
        deporte_id,
        contenido,
        valoracion,
        fecha,
      })
      await fetchComentarios()
      return { success: true }
    } catch (error) {
      console.error("Error al agregar comentario:", error)
      return { success: false }
    }
  }

  useEffect(() => {
    fetchComentarios()
  }, [deporte_id])

  return { comentarios, agregarComentario }
}
