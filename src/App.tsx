import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Web3Provider } from '@/providers/Web3Provider'
import { Landing } from '@/pages/Landing'
import '@/styles/globals.css'

function App() {
  return (
    <Web3Provider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </Router>
    </Web3Provider>
  )
}

export default App

