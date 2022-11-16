import { useSelector } from "react-redux"
import { createSelector } from "@reduxjs/toolkit"

export const useFilesSelectors = () => {

  const status = useSelector(createSelector(
    (state) => state.files.status,
    status => status
  ))

  const error = useSelector(createSelector(
    (state) => state.files.error,
    error => error
  ))

  const files = useSelector(createSelector(
    (state) => state.files.files,
    files => files
  ))

  const fileLists = useSelector(createSelector(
    (state) => state.files.fileLists,
    fileLists => fileLists
  ))

  return {
    status,
    error,
    files,
    fileLists
  }
}