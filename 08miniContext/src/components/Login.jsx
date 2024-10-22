import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

//This is a parent component
function Login() {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    const {setUser} = useContext(UserContext) //I am calling the user state from context

    //This function is typically used to update the user state in the context. It allows you to modify the user data when an action occurs (like a login or logout).
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, pass}) //We are pushing the value here to the storage container i.e to the userContext.
    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="username"/>
        <br/>
      <input type="text"
      value={pass}
      onChange={(e) => setPass(e.target.value)}
      placeholder="password"/>
    <br />
    <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login


/**SUMMARY:
 * In the Parent: You are setting or updating the user state.
 */