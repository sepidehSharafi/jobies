import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import HomePage from './Pages/Home/HomePage.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './Pages/Login/SignUp.jsx'
import Post from './Pages/Post/Post.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/post",
    element: <Post />
  },
  {
    path: "/profile",
    element: <Profile />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Auth0Provider
    domain="dev-syxhx0vwwi45rua5.us.auth0.com"
    clientId="HLgSCiNQYqKRdhb2OENQ46R5PYMQwrJ4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  </Auth0Provider>, */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
