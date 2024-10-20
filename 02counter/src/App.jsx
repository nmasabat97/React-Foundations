import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //SYNTAX const [variable, function] = useState(initialized_value)
  const [counter, setCounter] = useState(5)
  // let counter = 5; This wont work
  
  //Arrow function - this is javascript 
  const addValue = () => {
    //counter = counter + 1; This wont work
    if (counter <=9) setCounter(counter+1)
  }

  const rmvValue = () => {
    //counter = counter + 1; This wont work
    if (counter >= 1) setCounter(counter-1)
  }

  //IMPORTANT INTERVIEW QUESTION
  const specialCounter = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    //the output of above will be incremented by 1 only. 
    //because useState function executes the setter function in a single batch in this case.

    setCounter(counter => counter+1);
    setCounter(counter => counter+1);
    setCounter(counter => counter+1);
    setCounter(counter => counter+1);
    //writing a callback function like above will help the setter function to propogate through each line
    // thus incrementing the counter value to 1. therefore the output is incremented by 4
  }
  return (
    <>
      <h1>Basanti Danced {counter} times</h1>
      <button onClick = {addValue}>Dance more</button>
      <br />
      <br />
      <button onClick = {rmvValue}>Dance Less</button>
 
    </> 
  )
}

export default App
