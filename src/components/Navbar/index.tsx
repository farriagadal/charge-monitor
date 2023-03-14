import { Container, Icons, Profile, Avatar } from './styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <h2>Inicio</h2>
      <Icons>
        <img src="/mail_outline.svg" />
        <img src="/notifications_none.svg" />
      </Icons>
      <Profile>
        <Avatar />
        <p>Fernando Arriagada</p>
        <img src="/expand_more.svg" />
      </Profile>
    </Container>
  )
}

export default Navbar
