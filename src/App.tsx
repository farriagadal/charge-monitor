import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import Home from './views/Home'

function About () {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page</p>
    </div>
  )
}

function App () {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
