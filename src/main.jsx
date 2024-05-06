import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Login from './Routes/Login.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home/>
  },
  {
    path: "Login",
    element:<Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
