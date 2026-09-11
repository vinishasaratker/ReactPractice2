import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 className='bg-amber-400 text-pink-950 p-4 rounded-4xl'> Tailwind CSS </h3>

      <Card/>
      <Card/>

    </>
  )
}

export default App
