import { Container, Icons, Profile, Avatar } from './styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <h2>Inicio</h2>
      <Icons>
        <img src="src/assets/mail_outline.svg" />
        <img src="src/assets/notifications_none.svg" />
      </Icons>
      <Profile>
        <Avatar />
        <p>Nombre Apellido</p>
        <img src="src/assets/expand_more.svg" />
      </Profile>
    </Container>
  )
}

export default Navbar
