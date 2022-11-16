export const filesInitialState = () => ({
  data: [],
  fileLists: [],
  error: {
    getAll: null,
  },
  status: {
    getAll: 'idle',
    getFileLists: 'idle'
  }
})