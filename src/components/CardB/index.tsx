import { Box, CardBattery, List, Flex, Energy, Icons, Title } from './styles'
import { Card, Body, Header } from '../../styled-components/Card'
import { useSelector } from 'react-redux'
import SelectInput from '../SelectInput/indext'
import { useEffect, useState } from 'react'
import Battery from '../Battery'

const CardB = () => {
  const store = useSelector((state: any) => state.resources)
  const [chargersFiltered, setChargersFiltered] = useState<any>(store.chargers || [])
  const [connectorsFiltered, setConnectorsFiltered] = useState<any>(store.connectors || [])
  const [selectedCharger, setSelectedCharger] = useState<any>(null)

  useEffect(() => {
    if (store.chargers.length > 0) {
      setChargersFiltered(store.chargers)
      changeCharger(({ value: store.chargers[0].id, label: store.chargers[0].name }))
    }
  }, [store.chargers])

  const changeCharger = (data: any) => {
    setSelectedCharger(data)
    const array = store.connectors.filter((station: any) => station.chargerId === data.value)
    setConnectorsFiltered(array)
  }

  const getChargersOptions = () => {
    const array: any[] = []
    chargersFiltered.map((charger: any) => array.push({ value: charger.id, label: charger.name }))
    return array
  }

  const getCharger = () => {
    if (selectedCharger) {
      return store.chargers.find((charger: any) => charger.id === selectedCharger.value)
    }
    return null
  }

  return (
    <Card>
      <Header>
        <Box>
          <p>CARGADORES</p>
          {
            getChargersOptions().length > 0 &&
            <SelectInput
              placeholder={'asdadasd'}
              options={getChargersOptions()}
              defaultValue={getChargersOptions()[0]}
              onChange={changeCharger}
            />
          }
        </Box>
      </Header>
      <Body>
        <Title>Conectores:</Title>
        <List columns={connectorsFiltered.length}>
          {
            connectorsFiltered.map((connector: any, index: number) => (
              <CardBattery key={index}>
                <Battery status={connector.status} percetage={connector.charge_percentage} />
                <p>{connector.name}</p>
              </CardBattery>
            ))
          }
        </List>
        <Flex>
          <p>Energia total suministrada</p>
          <Energy>{getCharger()?.energy_supplied || 0} kW</Energy>
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
