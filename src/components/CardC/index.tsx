import { Box, CardBattery, List, Flex, Energy, Icons, Title } from './styles'
import { Card, Body, Header } from '../../styled-components/Card'
import { useSelector } from 'react-redux'
import SelectInput from '../SelectInput/indext'
import { useEffect, useState } from 'react'
import Battery from '../Battery'

const CardC = () => {
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

  return (
    <Card>
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
      </Body>
    </Card>
  )
}

export default CardC
