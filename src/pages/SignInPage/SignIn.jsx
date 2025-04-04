import React from "react"

export default function SignIn() {
  return <div>Iniciar Sesión</div>
}
/*import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      console.log("Registrando usuario:", email, password);
      // Aquí iría la lógica para registrar usuario (API, Firebase, etc.)
    } else {
      console.log("Iniciando sesión con:", email, password);
      // Aquí iría la lógica para autenticar usuario
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">{isRegistering ? "Registro" : "Iniciar Sesión"}</h2>
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full mb-2"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {isRegistering ? "Registrarse" : "Iniciar Sesión"}
        </button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)} className="mt-2 text-blue-500">
        {isRegistering ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
      </button>
    </div>
  );
}
*/
