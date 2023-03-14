import { Container, Logo, List } from './styles'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const menu = [
    { name: 'Inicio', path: '/', icon: 'src/assets/home.svg' },
    { name: 'Consumo', path: '/consumo', icon: 'src/assets/lightbulb_outline.svg' },
    { name: 'Informe', path: '/informe', icon: 'src/assets/bar_chart.svg' },
    { name: 'Configuraciones', path: '/configuraciones', icon: 'src/assets/settings.svg' }
  ]

  return (
    <Container>
      <Logo src="src/assets/logo.svg" alt="logo" />
      <List>
        {menu.map((item, index) => (
          <NavLink to={item.path} key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </NavLink>
        ))}
      </List>
    </Container>
  )
}

export default Sidebar
