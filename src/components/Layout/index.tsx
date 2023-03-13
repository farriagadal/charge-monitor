
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { Container, Content } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
			<Sidebar />
			<Content>
				<Navbar />
				{ children }
			</Content>
    </Container>
  )
}

export default Layout
