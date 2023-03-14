import { Box, CardBattery, List, Flex, Energy, Icons, Title } from './styles'
import { Card, Body, Header } from '../../styled-components/Card'
import { useSelector } from 'react-redux'
import SelectInput from '../SelectInput/indext'
import { useEffect, useState } from 'react'
import Battery from '../Battery'

const CardB = () => {
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
          <p>CARGADORES</p>
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
        <Title>Conectores:</Title>
        <List>
          <CardBattery>
            <Battery />
            <p>Conector C1</p>
          </CardBattery>
          <CardBattery>
            <Battery />
            <p>Conector C1</p>
          </CardBattery>
          <CardBattery>
            <Battery />
            <p>Conector C1</p>
          </CardBattery>
        </List>
        <Flex>
          <p>Energia total estación</p>
          <Energy>117 kW</Energy>
        </Flex>
        <Icons>
          <div>
            <img src="src/assets/battery-available.svg" />
            <p>DISPONIBLES</p>
          </div>
          <div>
            <img src="src/assets/battery-fallas.svg" />
            <p>CON FALLAS</p>
          </div>
          <div>
            <img src="src/assets/battery-default.svg" />
            <p>CARGANDO</p>
          </div>
        </Icons>
      </Body>
    </Card>
  )
}

export default CardB
