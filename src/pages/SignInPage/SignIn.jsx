/*import React from "react"

export default function SignIn() {
  return <div>Iniciar Sesión</div>
}
*/
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
import React, { useState } from "react";

export default function SignIn() {
  // Estados comunes para login y registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  
  // Estados adicionales solo para registro
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      const userData = {
        name,
        lastName,
        email,
        password,
        address,
        phone,
        
      };
      console.log("Registrando usuario:", userData);
      // Aquí iría la lógica para registrar usuario (API, Firebase, etc.)
    } else {
      console.log("Iniciando sesión con:", { email, password });
      // Aquí iría la lógica para autenticar usuario
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">
        {isRegistering ? "Registro" : "Iniciar Sesión"}
      </h2>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        {/* Campos adicionales solo para registro */}
        {isRegistering && (
          <>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border p-2 rounded"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-2 rounded w-full mb-2"
              required
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-2 rounded w-full mb-2"
              required
            />
          </>
        )}

        {/* Campos comunes */}
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
          className="border p-2 rounded w-full mb-4"
          required
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded w-full transition"
        >
          {isRegistering ? "Registrarse" : "Iniciar Sesión"}
        </button>
      </form>

      <button
        onClick={() => setIsRegistering(!isRegistering)}
        className="mt-4 text-yellow-500 hover:text-yellow-700"
      >
        {isRegistering ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
      </button>
    </div>
  );
}
