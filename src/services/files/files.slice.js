import { createSlice } from '@reduxjs/toolkit'
import { filesThunks } from './files.thunks'
import { filesInitialState } from './files.initialState'

const initialState = filesInitialState()
const thunks = filesThunks()
const { getAll, getFileLists } = thunks

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    resetStatus(state, { payload }) {
      state.error[payload] = initialState.error[payload]
      state.status[payload] = initialState.status[payload]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.status.getAll = 'loading'
        state.error.getAll = null
      })
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.status.getAll = 'idle'
        state.files = payload
      })
      .addCase(getAll.rejected, (state, { payload }) => {
        state.status.getAll = 'error'
        state.error.getAll = payload?.message
      })
      .addCase(getFileLists.pending, (state) => {
        state.status.getFileLists = 'loading'
        state.error.getFileLists = null
      })
      .addCase(getFileLists.fulfilled, (state, { payload }) => {
        state.status.getFileLists = 'idle'
        state.fileLists = payload?.files
      })
      .addCase(getFileLists.rejected, (state, { payload }) => {
        state.status.getFileLists = 'error'
        state.error.getFileLists = payload?.message
      })
  }
})

const filesActions = { ...filesSlice.actions, ...thunks }
const filesReducer = filesSlice.reducer

export { filesActions, filesReducer }