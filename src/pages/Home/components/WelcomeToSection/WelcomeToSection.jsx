import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function WelcomeToSection() {
  const [user, setUser] = useState([]);

  const dataFetch = () => {
    return axios
      .get("http://localhost:3000/usuarios/")
      .then((response) => setUser(response.data));
  };
  console.log(user);
  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className='text-lg'>
      WelcomeToSection
      <h1 className=''>Hola mundo!</h1>
      {user &&
        user.map((user, index) => {
          return <div key={index}>{user.nombre}</div>;
        })}
    </div>
  );
}
