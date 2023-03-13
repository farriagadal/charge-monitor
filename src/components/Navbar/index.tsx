import { Container } from './styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Navbar
