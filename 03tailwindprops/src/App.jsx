import { useState } from 'react'
import Card from './Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let cardObj = {
    desc : 'description',
    readLink : 'mention the link here'
  }
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded'>test</h1>
     <Card univ='Yule University' cobj = {cardObj}/>
     <Card univ='New York University'/>
    </>
  )
}

export default App
