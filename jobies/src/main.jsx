// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import HomePage from './Pages/Home/HomePage.jsx'
// import Login from './Pages/Login/Login.jsx'
// import SignUp from './Pages/Login/SignUp.jsx'
// import CreatePost from './Pages/Post/CreatePost.jsx'
// import Profile from './Pages/Profile/Profile.jsx'
// import Post from './Pages/Post/Post.jsx'
// import DisplayPost from './Pages/Post/DisplayPost.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },

//   {
//     path: "/signup",
//     element: <SignUp />
//   },
//   {
//     path: "/post",
//     element: <CreatePost />
//   },
//   {
//     path: "/profile",
//     element: <Profile />
//   },
//   {
//     path: "/displayPost/:id",
//     element: <DisplayPost/>
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Pages/Home/HomePage.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './Pages/Login/SignUp.jsx'
import CreatePost from './Pages/Post/CreatePost.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import DisplayPost from './Pages/Post/DisplayPost.jsx'
import UpdatePosrForm from './Pages/Post/UpdatePostForm.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    element: <CreatePost />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/displayPost/:id",
    element: <DisplayPost />
  },
  {
    path: "/displayPost/update/:id",
    element: <UpdatePosrForm />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)