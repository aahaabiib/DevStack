import { useState, useEffect } from "react"
import technologiesData from "./data/technologies.json"
import Navbar from "./components/Nav"
import Hero from "./components/Hero"
import Grid from "./components/Grid"

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
      <Navbar/>
      <Hero/>
      <Grid technologies={technologies}/>
      
    </div>

  )

}

export default App