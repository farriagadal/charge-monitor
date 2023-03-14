import CardA from '../../components/CardA'
import CardB from '../../components/CardB'
import CardC from '../../components/CardC'
import { Container, Box } from './styles'

const Home = () => {
  return (
    <Container>
      <Box>
        <CardA />
        <CardB />
      </Box>
      <CardC />
    </Container>
  )
}

export default Home
