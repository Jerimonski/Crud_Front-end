import { useState } from "react"
import axios from "axios"
import { useUserContext } from "../../contexts/userContext"
import { useNavigate } from "react-router-dom"

export default function SignIn_LogInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRegistering, setIsRegistering] = useState(false)
  const [name, setName] = useState("")

  const { setCurrentUser } = useUserContext()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isRegistering) {
      const newUser = {
        nombre: name,
        email,
        contraseña: password,
      }

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/usuarios`,
          newUser
        )

        if (response.status === 201 || response.status === 200) {
          alert("Usuario registrado con éxito 🎉 ¡Ahora inicia sesión")
          setIsRegistering(false)
          setName("")
          setEmail("")
          setPassword("")
        }
      } catch (error) {
        if (error.response) {
          console.error("Error al iniciar sesión:", error.response.data)
          alert(
            error.response.data.mensaje || "Correo o contraseña incorrectos 😭"
          )
        } else if (error.request) {
          console.error("No se recibió respuesta del servidor:", error.request)
          alert("Servidor no responde 😢")
        } else {
          console.error("Error desconocido:", error.message)
          alert("Ocurrió un error inesperado 😵")
        }
      }
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/usuarios/login`,
          {
            email,
            password,
          }
        )
        const { token, usuario } = response.data

        localStorage.setItem("token", token)

        setCurrentUser(usuario)
        alert(`Bienvenido, ${usuario.nombre} 🥳`)
        navigate("/")
      } catch (error) {
        console.error("Error al iniciar sesión:", error)
        alert("Correo o contraseña incorrectos 😭")
      }
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>
        {isRegistering ? "Registro" : "Iniciar Sesión"}
      </h2>
      <form
        className='bg-white p-6 rounded shadow-md w-80'
        onSubmit={handleSubmit}
      >
        {isRegistering && (
          <input
            type='text'
            placeholder='Nombre'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border p-2 rounded w-full mb-2'
            required
          />
        )}

        <input
          type='email'
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border p-2 rounded w-full mb-2'
          required
        />
        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border p-2 rounded w-full mb-4'
          required
        />
        <button
          type='submit'
          className={`${
            isRegistering
              ? "bg-yellow-500 hover:bg-yellow-600 text-black"
              : "bg-green-500 hover:bg-green-600 text-white"
          } px-4 py-2 rounded w-full font-semibold`}
        >
          {isRegistering ? "Registrarse ✨" : "Iniciar Sesión 💫"}
        </button>
      </form>

      <button
        onClick={() => setIsRegistering(!isRegistering)}
        className='mt-4 text-yellow-500 hover:text-yellow-700 font-medium'
      >
        {isRegistering
          ? "¿Ya tienes cuenta? Inicia sesión"
          : "¿No tienes cuenta? Regístrate"}
      </button>
    </div>
  )
}
