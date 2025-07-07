import axios from "axios"
import { useEffect, useState } from "react"

const deportesMap = {
  Tennis: 1,
  Natacion: 2,
  Baloncesto: 3,
  Yoga: 4,
  Gimnasio: 5,
}

export default function useComentarios(nombreDeporte) {
  const [comentarios, setComentarios] = useState([])

  const deporte_id = deportesMap[nombreDeporte]

  const fetchComentarios = async () => {
    if (!deporte_id) return
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/comentarios?deporte=${deporte_id}`
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
    valoracion = 5, // ⭐ ahora sí mandamos valoracion
  }) => {
    if (!deporte_id || !usuario_id || !contenido) {
      console.warn("Faltan datos obligatorios para enviar comentario")
      return { success: false }
    }

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
