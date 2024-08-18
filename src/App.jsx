import { useEffect, useState } from "react"

const App = () => {

const [counter, setCounter] = useState(0)
const [users, setUsers] = useState(null)
useEffect(() => {
  
  fetch("http://localhost:3000/books")
  .then((res) => res.json())
  .then((data) => {
  
    setUsers(data)
  });

}, []); //array de dependencias 


if(!users) return <div>cargando....</div>
  return (
     <>
     
     <h1>UseEffect</h1>
     <button onClick={()=>  { setCounter(counter + 1)}}>
      Counter: {counter} 
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.CODIGO_UNICO}>{user.CODIGO_UNICO}-{user.TIPO_DE_INSTITUCION} {user.NOMBRE_INSTITUCION} {user.NOMBRE_DE_LA_SEDE}{user.NOMBRE_CARRERA}{user.JORNADA}{user.ARANCEL_ANUAL_2024}</li>
        ))}
      </ul>
     </>
  )
}
export default App