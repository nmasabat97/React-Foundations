import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {About, Footer, Header, Home, Layout, Contact} from './components'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path:'home',
      element: <Home />
    },
    {
      path:'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
