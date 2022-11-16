import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useFilesSelectors } from '../../services/files/files.selectors'
import { filesActions } from '../../services/files/files.slice'

const useFiles = () => {

  const dispatch = useDispatch()

  const { getAll, getFileLists, resetStatus } = filesActions

  useEffect(() => {
    dispatch(getAll({}))
    dispatch(getFileLists({}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { files, status, error, fileLists } = useFilesSelectors()

  const handleFilesSelect = (e) => {
    const value = e.currentTarget.value != 'DEFAULT' && e.currentTarget.value
    dispatch(getAll({ fileName: value }))
  }

  const onCloseErrorAlert = () => {
    dispatch(resetStatus('getAll'))
  }

  return {
    files,
    fileLists,
    status,
    error,
    onCloseErrorAlert,
    handleFilesSelect
  }
}

export default useFiles