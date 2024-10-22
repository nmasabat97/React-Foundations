import React from 'react'

const UserContext = React.createContext() //User Context is like a storage box, which will hold our objects.
//In this file i have only CREATED a storage box.

export default UserContext; 

//every context will provide a wrapper (provider). check file UserContextProvider.jsx
