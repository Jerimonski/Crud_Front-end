import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [inputDescription, setInputDescription] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([])

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    const dataToSend = {
      description: inputDescription,
      value: inputValue,
    }

    try {
      const response = await axios.post("http://localhost:3000/", dataToSend)
      console.log(response.data)
      setInputDescription("")
      setInputValue("")
      fetchData()
    } catch (error) {
      console.error("error:", error)
    }
  }

  const fetchData = () => {
    return axios
      .get("http://localhost:3000/")
      .then((response) => setItems(response.data.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className=' bg-blue-200'>
      asdasdasdsd
      <form onSubmit={handleOnSubmit} className='flex flex-col w-max gap-4'>
        <label>
          Descripcion
          <input
            type='text'
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
            className='border'
          />
        </label>
        <label>
          Valor
          <input
            type='number'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='border'
          />
        </label>
        <button type='submit'>Guardar</button>
      </form>
      <details>
        {items &&
          items.map((item, index) => {
            return (
              <li key={index}>
                {item.value} {item.description}
              </li>
            )
          })}
        asdsad
      </details>
    </div>
  )
}

export default App
