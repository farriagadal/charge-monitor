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

  return (
    <Card>
      <Header>
        <p>ACTIVO</p>
        <SelectInput placeholder={'asdadasd'} options={getAssetsOptions()} defaultValue={undefined} onChange={(data: any) => { console.log('onChange data', data) }} />
        <p>ACTIVO</p>
        <SelectInput placeholder={'asdadasd'} options={getStationsOptions()} defaultValue={undefined} onChange={(data: any) => { console.log('onChange data', data) }} />
      </Header>
      <Body>
        Energia total estación
      </Body>
    </Card>
  )
}

export default CardA
