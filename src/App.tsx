import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home'
import { Provider, useDispatch } from 'react-redux'
import store from './store'
import { fetchResources } from './store/slices/resources'
import { useEffect } from 'react'

function About () {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page</p>
    </div>
  )
}

function App () {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   fetchResources()
  //   // dispatch(fetchResources())
  // }, [dispatch])

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
