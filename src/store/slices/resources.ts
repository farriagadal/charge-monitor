import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface ResourceState {
  stations: any[]
  chargers: any[]
  connectors: any[]
}

const initialState: ResourceState = {
  stations: [],
  chargers: [],
  connectors: []
}

export const fetchResources: any = () => async (dispatch: any) => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/AlvaroArratia/static-api/db')
    console.log('response', response)
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
      console.log('action.payload', action.payload)
      state.stations = action.payload.stations
      state.chargers = action.payload.chargers
      state.connectors = action.payload.connectors
    }
  }
})

export const { setResources } = resourcesSlice.actions

export default resourcesSlice.reducer
