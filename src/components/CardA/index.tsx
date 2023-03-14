import { Box, Energy, Flex, Address } from './styles'
import { Card, Body, Header } from '../../styled-components/Card'
import { useSelector } from 'react-redux'
import SelectInput from '../SelectInput/indext'
import { useEffect, useState } from 'react'

const CardA = () => {
  const store = useSelector((state: any) => state.resources)
  const [assetsFiltered, setAssetsFiltered] = useState<any>(store.assets || [])
  const [stationsFiltered, setStationsFiltered] = useState<any>(store.assets || [])

  const [selectedAsset, setSelectedAsset] = useState<any>(null)
  const [selectedStation, setSelectedStation] = useState<any>(stationsFiltered || null)

  useEffect(() => {
    store.assets.length > 0 && setAssetsFiltered(store.assets)
    store.stations.length > 0 && setStationsFiltered(store.stations)
    if (store.assets.length > 0) {
      changeAsset({ value: store.assets[0].id, label: store.assets[0].name })
    }
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

  const changeAsset = (data: any) => {
    setSelectedAsset(data)
    const array = store.stations.filter((station: any) => station.assetId === data.value)
    setStationsFiltered(array)
    setSelectedStation({ value: array[0].id, label: array[0].name })
  }

  const changeStation = (data: any) => {
    setSelectedStation(data)
  }

  const getStation = () => {
    if (selectedStation) {
      return store.stations.find((station: any) => station.id === selectedStation.value)
    }
    return null
  }

  return (
    <Card>
      <Header>
        <Box>
          <p>ACTIVO</p>
          { getAssetsOptions().length > 0 &&
            <SelectInput
              placeholder=""
              options={getAssetsOptions()}
              defaultValue={getAssetsOptions()[0]}
              onChange={changeAsset}
            />
          }
        </Box>
        <Box>
          <p>ESTACIÓN</p>
          { getStationsOptions().length > 0 &&
            <SelectInput
              placeholder=""
              options={getStationsOptions()}
              defaultValue={getStationsOptions()[0]}
              onChange={(data: any) => { changeStation(data) }}
            />
          }
        </Box>
      </Header>
      <Body>
        <Flex>
          <p>Energia total estación</p>
          <Energy>{ getStation()?.total_energy || 0 } kW</Energy>
        </Flex>
        <Address>
          { getStation()?.address }
        </Address>
      </Body>
    </Card>
  )
}

export default CardA
