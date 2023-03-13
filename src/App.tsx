import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'

function Home () {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => { setCount(count + 1) }}>count is {count}</button>
      <p>Edit & save to test HMR</p>
    </div>
  )
}

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
