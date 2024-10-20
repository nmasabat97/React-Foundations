import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*~`<>?/;:"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]) //optimation. We only give params to just mention relationship. 
  //If not mentioned then useCallback's memoization wil take care of it.
  //try mentioning only "password", it will fall in infinite loop

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  //function to copy text to clickboard
  const copytoClipboard = useCallback(() => {
    //passRef.current?.select() --> this will show selection of the password which has to be copied
    passRef.current?.setSelectionRange(0, 5) // here we can define how much of that text has to be selected
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 bg-gray-500 text-purple-400 px-5 py-5'>
            <h1 className=' text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input type="text" value={password} placeholder='password' ref={passRef}
          className='outline-none w-full px-3 py-1'
          readOnly />

        <button
          onClick={copytoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={50} value={length} className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          // when the slider is adjusted, the onChange event updates the length state, reflecting the current position of the slider:
          />
          <label>Length: {length}</label>
          <input type="checkbox" defaultChecked={numberAllowed} onClick={() => setNumberAllowed(prev => !prev)} />
          <label>Numbers</label>

          <input type="checkbox" defaultChecked={numberAllowed} onClick={() => setCharAllowed(prev => !prev)} />
          <label>Characters</label>

        </div>
      </div>

    </div>
  )
}

export default App
