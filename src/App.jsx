import { useEffect, useState } from "react"

const App = () => {

const [counter, setCounter] = useState(0)
const [courses, setCourses] = useState([])
useEffect(() => {
  
  fetch("http://localhost:3000/books")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setCourses(data)
  })

}, []); //array de dependencias 

  return (
     <>
     
     <h1>UseEffect</h1>
     <button onClick={()=>  { setCounter(counter + 1)}}>
      Counter: {counter} 
      </button>
      <ul>
            {courses.map((course)=>{
              <li key={course.CODIGO_UNICO}>{course.TIPO_DE_INSTITUCION}</li>
            })

            }
      </ul>
     </>
  )
}
export default App