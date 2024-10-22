Okay, so in this notes, I will explain what is context API as per my understanding, so say there is a login page. We are simply trying to pass on the username from the login page to the dashboard. 

So usually in a dashboard there will be a lot of components. Typically you, if you want to pass on the username from the login page to one of these components, you would have to pass prop to each and every component that comes in the way. In the sense, we start using props into components which don’t even require it. 
This is what we call us prop drilling. 

Now to avoid this issue react introduced a concept of context API, which means that there will be a global container for accessing these values which have such requirement. Any component which is defined within the scope of the project can use this Global store.

How to start making use of it?
The first step is to 'createContext'. In simple terms creating a global storage container.

Step 2 is to make sure we publish this global store so that it is accessible to all components and this can be done by UserContext.Provider.
 Now we wrap the child components using '{children}' in the context provider and supply the state value that is 'user' which is a variable/constant and 'setUser', which is a setter function for that. 

Moving on to step three is first identifying the components which we require. Typically, it would be Login.jsx and Profile.jsx where login is the parent component and profile is the child component. 

Now reitrating our motive here, we need to pass on the username which is entered in login page to the profile page. We go to login page and then we call the 'user' from userContext (using useContext hook) that is 'const {setUser} = useContext(UserContext)', 

so here the obvious next step is the push the username and password into setUser function.
'setUser({username, pass})'

Now the final step is to consume these new values, which has been pushed using the context from user.
'const {setUser} = useContext(UserContext)'
return '<div>{user}</div>'

NOW YOU CAN USE 'username' and 'password' in any component! ENJOY!