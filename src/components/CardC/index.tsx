import { Box, CardBattery, List, Flex, Energy, Icons, Title } from './styles'
import { Card, Body, Header } from '../../styled-components/Card'
import { useSelector } from 'react-redux'
import SelectInput from '../SelectInput/indext'
import { useEffect, useRef, useState } from 'react'
import Battery from '../Battery'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

const RenderLineChart = ({ width }: any) => {
  // get width of component CardC
  return (
    <LineChart width={width - 80} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  )
}

const CardC = () => {
  const ref = useRef<any>(null)
  const store = useSelector((state: any) => state.resources)
  const [chargersFiltered, setAssetsFiltered] = useState<any>(store.chargers || [])

  useEffect(() => {
    store.chargers.length > 0 && setAssetsFiltered(store.chargers)
  }, [store.chargers])

  const getAssetsOptions = () => {
    const array: any[] = []
    chargersFiltered.map((asset: any) => array.push({ value: asset.id, label: asset.name }))
    return array
  }

  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(ref.current.offsetWidth)
  }, [])

  return (
    <Card ref={ref}>
      <Header>
        <Box>
          <p>RESUMEN</p>
          {
            getAssetsOptions().length > 0 &&
            <SelectInput
              placeholder={'asdadasd'}
              options={getAssetsOptions()}
              defaultValue={getAssetsOptions()[0]}
              onChange={(data: any) => { console.log('onChange data', data) }}
            />

          }
        </Box>
      </Header>
      <Body>
        <Title>Demanda</Title>
        <RenderLineChart width={width} />
      </Body>
    </Card>
  )
}

export default CardC
