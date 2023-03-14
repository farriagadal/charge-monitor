import { Card, Body, Header } from '../../styled-components/Card'
import { useSelector } from 'react-redux'
// import { Card, Body, Header } from './styles'

const CardA = () => {
  const store = useSelector((state: any) => state.resources)
  console.log('store', store)

  return (
    <Card>
      <Header>
        <p>ACTIVO</p>
      </Header>
      <Body>
        Energia total estación
      </Body>
    </Card>
  )
}

export default CardA
