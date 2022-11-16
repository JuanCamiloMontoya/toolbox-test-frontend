import axios from 'axios'
import { apiUrl } from "../config/environments"

const defaultErrorMessage = `Lo sentimos! Tenemos un error inesperado. Por favor intentelo más tarde.`

const onRequest = (config) => {
  config.baseURL = apiUrl
  return config
}

const onRequestError = (error) => {
  const errorMsg = error.response?.data || defaultErrorMessage
  return Promise.reject(errorMsg)
}

const onResponse = (response) => {
  return response
}

const onResponseError = (error) => {
  const errorMsg = error.response?.data?.message || defaultErrorMessage
  return Promise.reject(errorMsg)
}

const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}

export const apiInstence = axios.create()
setupInterceptorsTo(apiInstence)