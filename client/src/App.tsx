import React from "react"
import { Signup } from "./components/signup"
import { Login } from "./components/login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>    
  )
}

export default App
