import React from "react"
import { Signup } from "./components/signup"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>    
  )
}

export default App
