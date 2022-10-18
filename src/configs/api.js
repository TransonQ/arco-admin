import axios from 'axios'

const { VITE_API_BASE_URL } = import.meta.env

console.log('url: ', VITE_API_BASE_URL)

const api = axios.create({
  baseURL: VITE_API_BASE_URL,
})

// request
const handleRequest = (config) => {
  // 附件常用
  if (config.method === 'post') {
    if (config?.data?.isFormData) {
      config.headers.post['Content-Type'] = 'multipart/form-data'
      config.data = config.data.formData
    }
  }

  return config
}
// request error
const handleRequestErr = (error) => {
  return Promise.reject(error)
}

// response
const handleResponse = (response) => {
  // return Promise.reject(new Error('shibai')) // 测试错误边界
  return response
}
// response error
const handleResponseErr = (error) => {
  const errInfo = error.response.data
  console.log('<error code>: ', errInfo.code)

  return Promise.reject(error)
}

// use
api.interceptors.request.use(handleRequest, handleRequestErr)
api.interceptors.response.use(handleResponse, handleResponseErr)

export { api }
