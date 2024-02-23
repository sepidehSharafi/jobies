import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from './components/Layout.jsx'
// import Login from "./components/Login.jsx"

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   )
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
