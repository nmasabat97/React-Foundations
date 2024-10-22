import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import {About, Home, Layout, Contact, User} from './components'
import Github, { gitHubInfoLoader } from './components/GitHub/Github'

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path:'home',
//       element: <Home />
//     },
//     {
//       path:'about',
//       element: <About />
//     },
//     {
//       path: 'contact',
//       element: <Contact />
//     }
//   ]
// }])
const router = createBrowserRouter(
  //both methods have nesting
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}> 
      <Route path='/user/:uid' element={<User uid="3"/>} />  {/**This will demonstrate the usage of useParams hook */}
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route 
      loader={gitHubInfoLoader}
      path='/github' 
      element={<Github />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
