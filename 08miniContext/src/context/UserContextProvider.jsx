import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'

//In this file i will now make sure this storage box is supplied to this project. That is why we call it a context provider.
function UserContextProvider({children}) {
    const [user, setUser] = useState(null) //Passing variable and method here.
  return (
    <div>
        <UserContext.Provider value={{user, setUser}}> {/**Wrap child components in the Context Provider and supply the state value. */}
            {children} {/**This will provide all divs */}
        </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider
