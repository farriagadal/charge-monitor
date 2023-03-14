import CardA from '../../components/CardA'
import CardB from '../../components/CardB'
import CardC from '../../components/CardC'
import { Container, Box } from './styles'
import { useSelector } from 'react-redux'

const Home = () => {
  const store = useSelector((state: any) => state.resources)

  return (
    <Container>
      <Box>
        <CardA />
        { (store.stationSelected.value === 0 || store.stationSelected.value || store.stationSelected.id) && <CardB /> }
      </Box>
      { (store.chargerSelected.value === 0 || store.chargerSelected.value || store.chargerSelected.id) && <CardC /> }
    </Container>
  )
}

export default Home
