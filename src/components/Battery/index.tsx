import { Container } from './styles'

type BatteryProps = {
  status: 'charging' | 'faulted' | 'available'
  percetage: number
}

const Battery = ({ status, percetage }: BatteryProps) => {
  return (
    <Container
      percetage={
        status === 'charging'
          ? percetage > 100
            ? 100
            : percetage
          : 0
      }>
      {
        status === 'charging' &&
        <img src="/battery-default.svg" />
      }
      {
        status === 'available' &&
        <img src="/battery-available.svg" />
      }
      {
        status !== 'charging' && status !== 'available' &&
        <img src="/battery-fallas.svg" />
      }
    </Container>
  )
}

export default Battery
