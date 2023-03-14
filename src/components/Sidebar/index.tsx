import { Container, Logo, List } from './styles'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const menu = [
    { name: 'Inicio', path: '/', icon: '/home.svg' },
    { name: 'Consumo', path: '/consumo', icon: '/lightbulb_outline.svg' },
    { name: 'Informe', path: '/informe', icon: '/bar_chart.svg' },
    { name: 'Configuraciones', path: '/configuraciones', icon: '/settings.svg' }
  ]

  return (
    <Container>
      <Logo src="/logo.svg" alt="logo" />
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
