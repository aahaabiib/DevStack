import { useState, useEffect } from "react"
import technologiesData from "./data/technologies.json"


function  App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    
      setTechnologies(technologiesData)
      setLoading(false)
     }, [])

  if(loading){
    return <p className="text-center mt-10">Loading...</p>
  }


  return (

    <div>
      
      <h1 className="text-3xl font-bold text-center mt-6">
        Total Techologies: {technologies.length}
      </h1>
      <ul className="max-w-md mx-auto mt-4">
        {technologies.map((tech) => (
          <li key={tech.id} className="border-b py-2">
            {tech.name} - {tech.category}
          </li>
        ))}
      </ul>
    </div>

  )

}

export default App