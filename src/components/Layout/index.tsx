
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { Container, Content, Box } from './styles'
import { useDispatch } from 'react-redux'
import { fetchResources } from '../../store/slices/resources'
import { useEffect } from 'react'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchResources())
  }, [dispatch])

  return (
    <Container>
			<Sidebar />
			<Content>
				<Navbar />
        <Box>
          { children }
        </Box>
			</Content>
    </Container>
  )
}

export default Layout
