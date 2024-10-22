import React, {useContext} from 'react'
import UserContext from '../context/UserContext';

//this is a child component
function Profile() {
    
    //This "user" object contains the current user data, such as the user's name, email, or any other relevant information.
    const {user} = useContext(UserContext) //This is where you are getting the context

  if(!user) return <div>Please login</div> //js conditional return
    
  return <div>Welcome {user.username}</div>
}

export default Profile

/**SUMMARY
 * In the Child: You are reading or using the current user state.
 */