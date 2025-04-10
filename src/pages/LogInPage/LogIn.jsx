import React, { useState } from "react"
import { useUserContext } from "../../contexts/userContext" // ajusta el path
import { useNavigate } from "react-router-dom" // si estás usando react-router
import useUsers from "../../hooks/useUsers"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setCurrentUser } = useUserContext()
  const navigate = useNavigate()
  const { users } = useUsers()
  const handleSubmit = (e) => {
    e.preventDefault()

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.contraseña === password
    )

    if (user) {
      setCurrentUser(user)
      alert(`Bienvenido, ${user.nombre} 💚`)
      navigate("/") // redirige al home
    } else {
      alert("Correo o contraseña incorrectos 😭")
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Iniciar Sesión</h2>
      <form
        className='bg-white p-6 rounded shadow-md w-80'
        onSubmit={handleSubmit}
      >
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
          className='border p-2 rounded w-full mb-2'
          required
        />
        <button
          type='submit'
          className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full font-semibold'
        >
          Iniciar Sesión 💫
        </button>
      </form>
    </div>
  )
}
