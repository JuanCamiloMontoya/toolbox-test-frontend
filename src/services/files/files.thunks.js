import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstence } from "../../common/axios/interceptors"

export const filesThunks = () => {

  const getAll = createAsyncThunk(
    'files/data',
    async ({ fileName }, { rejectWithValue }) => {
      try {
        const route = fileName ? `/files/data?fileName=${fileName}` : '/files/data'
        const { data } = await apiInstence.get(route)
        return data
      } catch (error) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  )

  const getFileLists = createAsyncThunk(
    'files/file-lists',
    async ({ }, { rejectWithValue }) => {
      try {
        const { data } = await apiInstence.get('/files/list')
        return data
      } catch (error) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  )

  return {
    getAll,
    getFileLists
  }
}