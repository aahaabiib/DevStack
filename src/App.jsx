import { useState, useEffect } from "react"
import technologiesData from "./data/technologies.json"
import Navbar from "./components/Nav"
import Hero from "./components/Hero"
import Grid from "./components/Grid"
import YourStack from "./components/YourStack"
import { toast } from "react-toastify"
import Footer from "./components/Footer"

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
        toast.warning(`${tech.name} is already Added`)
        return
      }

      setStack([...Stack, tech])
      toast.success(`${tech.name} added to your stack`)
     }

     function handleRemove(id){
      const removedTech = Stack.find((item) => item.id ===id)
      setStack(Stack.filter((item) => item.id !== id))
      toast.info(`${removedTech.name} removed from your stack.`)
     }

     function handleRemoveAll(){
      setStack([])
      toast.info('All technologies removed from your stack')
     }


  if(loading){
    return <p className="text-center mt-10">Loading...</p>
  }


  return (

    <div>
      <Navbar/>
      <Hero/>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-8">
      <Grid technologies={technologies} Stack= {Stack} clickToAdd= {handleAddToStack}/>
      <YourStack Stack={Stack} Remove = {handleRemove} RemoveAll = {handleRemoveAll}/>
      </div>
      <Footer/>
      
    </div>

  )

}

export default App