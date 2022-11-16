import { combineReducers } from "@reduxjs/toolkit"
import { filesReducer } from "../services/files/files.slice"

const reducers = combineReducers({
  files: filesReducer
})

export default reducers