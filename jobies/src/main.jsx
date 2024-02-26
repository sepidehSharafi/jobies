import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import HomePage from './Pages/Home/HomePage.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './Pages/Login/SignUp.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path:"/",
element: <HomePage/>
},
{path: "/login",
element: <Login/>},
{path: "/signup",
element: <SignUp/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
