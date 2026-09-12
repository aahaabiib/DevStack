import { useState, useEffect } from "react"
import technologiesData from "./data/technologies.json"
import Navbar from "./components/Nav"
import Hero from "./components/Hero"
import Grid from "./components/Grid"

function  App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [Stack, setStack] = useState([])
  
  useEffect(() => {
    
      setTechnologies(technologiesData)
      setLoading(false)
     }, [])

     function handleAddToStack(tech){
      const alreadyAdded = Stack.some((item) => item.id === tech.id)

      if (alreadyAdded){
        alert(`${tech.name} is already Added`)
        return
      }

      setStack([...Stack, tech])
     }


  if(loading){
    return <p className="text-center mt-10">Loading...</p>
  }


  return (

    <div>
      <Navbar/>
      <Hero/>
      <Grid technologies={technologies} Stack= {Stack} clickToAdd= {handleAddToStack}/>
      
    </div>

  )

}

export default App