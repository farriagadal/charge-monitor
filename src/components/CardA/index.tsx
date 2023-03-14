import { Box, Energy, Flex, Address } from './styles'
import { Card, Body, Header } from '../../styled-components/Card'
import { useSelector } from 'react-redux'
import SelectInput from '../SelectInput/indext'
import { useEffect, useState } from 'react'

const CardA = () => {
  const store = useSelector((state: any) => state.resources)
  const [assetsFiltered, setAssetsFiltered] = useState<any>(store.assets || [])
  const [stationsFiltered, setStationsFiltered] = useState<any>(store.assets || [])
  useEffect(() => {
    store.assets.length > 0 && setAssetsFiltered(store.assets)
    store.stations.length > 0 && setStationsFiltered(store.stations)
  }, [store])

  const getAssetsOptions = () => {
    const array: any[] = []
    assetsFiltered.map((asset: any) => array.push({ value: asset.id, label: asset.name }))
    return array
  }

  const getStationsOptions = () => {
    const array: any[] = []
    stationsFiltered.map((asset: any) => array.push({ value: asset.id, label: asset.name }))
    return array
  }

  console.log('getAssetsOptions()', getAssetsOptions())

  return (
    <Card>
      <Header>
        <Box>
          <p>ACTIVO</p>
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

        <Box>
          <p>ESTACIÓN</p>
          {
            getStationsOptions().length > 0 &&
            <SelectInput
              placeholder={'asdadasd'}
              options={getStationsOptions()}
              defaultValue={getStationsOptions()[0]}
              onChange={(data: any) => { console.log('onChange data', data) }}
            />
          }
        </Box>
      </Header>
      <Body>
        <Flex>
          <p>Energia total estación</p>
          <Energy>117 kW</Energy>
        </Flex>
        <Address>
          Av. El Salto 4651, Huechuraba, RM.
        </Address>
      </Body>
    </Card>
  )
}

export default CardA
