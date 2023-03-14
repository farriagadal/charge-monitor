import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface ResourceState {
  assets: any[]
  stations: any[]
  chargers: any[]
  connectors: any[]
  stationSelected: any
  chargerSelected: any
}

const initialState: ResourceState = {
  assets: [],
  stations: [],
  chargers: [],
  connectors: [],
  stationSelected: {},
  chargerSelected: {}
}

export const fetchResources: any = () => async (dispatch: any) => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/AlvaroArratia/static-api/db')
    dispatch(setResources(response.data))
  } catch (error) {
    console.log(error)
  }
}

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    setResources: (state, action: PayloadAction<ResourceState>) => {
      state.assets = action.payload.assets
      state.stations = action.payload.stations
      state.chargers = action.payload.chargers
      state.connectors = action.payload.connectors
    },
    setStationSelected: (state, action: PayloadAction<any>) => {
      state.stationSelected = action.payload
    },
    setChargerSelected: (state, action: PayloadAction<ResourceState>) => {
      state.chargerSelected = action.payload
    }
  }
})

export const { setResources, setStationSelected, setChargerSelected } = resourcesSlice.actions

export default resourcesSlice.reducer
