import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface IText {
  value: string
  timestamp: number
  origin: string
}
export interface ISampleState {
  saveList: IText[]
}

const initialState: ISampleState = { saveList: [] }

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IText>) => {
      // state.count += 1
      state.saveList.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<IText>) => {
      // state.count += 1
      state.saveList = state.saveList.filter(
        (item) => item.timestamp !== action.payload.timestamp
      )
    }
  }
})

export const { addItem, removeItem } = sampleSlice.actions

export default sampleSlice.reducer
