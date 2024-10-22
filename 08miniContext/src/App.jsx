import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider> {/**<UserContext.Provider> is also correct */}
        <h1>Sample Context API project</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
