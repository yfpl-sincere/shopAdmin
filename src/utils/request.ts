import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  // 创建一个实例，这样不会改变axios对象
  baseURL: 'https://mock.apifox.cn/m1/1381339-0-default/api/admin/'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 一般统一设置用户身份 token

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 相应拦截器
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // 统一处理接口响应错误，比如 token 过期无效、服务端异常等
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})
// export default request

export default <T = any> (config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
