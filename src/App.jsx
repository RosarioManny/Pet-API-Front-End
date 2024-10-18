import { useState, useEffect } from 'react'
import { getPets } from './services/petService.js'
import './App.css'

const App = () => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {

      const petsData = await getPets();
      setPets(petsData)

    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchPets()
  }, 
  [])


  return (
    <>
    
    </>
  )
};

export default App;

