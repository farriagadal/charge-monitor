import { Container, LabelY, LabelX } from './styles'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const Chart = ({ width, data }: any) => {
  return (
    <Container>
      <LabelY>kW por hora</LabelY>
      <LabelX>Horas</LabelX>
      <LineChart width={width - 100} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </Container>

  )
}

export default Chart
