
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { Container, Content, Box } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
