import { Box, Title, Divider, Content } from './styles'
import { Card, Body, Header } from '../../styled-components/Card'
import { useSelector } from 'react-redux'
import SelectInput from '../SelectInput'
import { useEffect, useRef, useState } from 'react'
import Chart from '../Chart'

const data1 = [
  {
    name: '0:00',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: '2:00',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: '4:00',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: '6:00',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: '8:00',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: '10:00',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: '12:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '14:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '16:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '18:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '20:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '22:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '24:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }

]

const data2 = [
  {
    name: '0:00',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: '2:00',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: '4:00',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: '6:00',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: '8:00',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: '10:00',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: '12:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '14:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '16:00',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: '18:00',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: '20:00',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: '22:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: '24:00',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

const options = [
  {
    label: 'Últimas 24 horas',
    value: '24h'
  },
  {
    label: 'Últimos 7 días',
    value: '7d'
  },
  {
    label: 'Últimos 30 días',
    value: '30d'
  }
]

const CardC = () => {
  const ref = useRef<any>(null)

  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(ref.current.offsetWidth)
  }, [])

  return (
    <Card ref={ref}>
      <Header>
        <Box>
          <p>RESUMEN</p>
          <SelectInput
            placeholder={'asdadasd'}
            options={options}
            defaultValue={options[0]}
            onChange={(data: any) => { console.log('onChange data', data) }}
          />
        </Box>
      </Header>
      <Body>
        <Content>
          <Title>Demanda</Title>
          <Chart width={width} data={data1} />
          <Divider />
          <Title>Energía</Title>
          <Chart width={width} data={data2} />
        </Content>
      </Body>
    </Card>
  )
}

export default CardC
