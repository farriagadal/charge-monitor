import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home'
import { Provider, useDispatch } from 'react-redux'
import store from './store'
import { fetchResources } from './store/slices/resources'
import { useEffect } from 'react'

function OtherPage () {
  return (
    <div>
      <h2>Other Page</h2>
    </div>
  )
}

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResources())
  }, [dispatch])

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="*" Component={OtherPage} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
