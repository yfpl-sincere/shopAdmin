/**
 *  公共基础接口模块
 * */

import request from '@/utils/request'

interface ResponseData<T = any> {
    status: number
    msg: string
    data: T
}

export const getLoginInfo = () => {
  // const params = {
  //       userName: '李四',
  //       userPassword: '123'
  //     }
  // return request({
  //   params: {
  //     userName: '李四',
  //     userPassword: '123'
  //   },
  //   method: 'GET',
  //   url: '/login/info'
  // })
  // return request.get<{
  //  code:string
  //   msg:string
  //   data:{
  //     logo_square: string
  //     logo_rectangle: string
  //     login_log:string
  //     slide:string[]
  //   }
  // }>('/login/info')

  // return request.get<ResponseData<{
  //       logo_square: string
  //       logo_rectangle: string
  //       login_log:string
  //       slide:string[]
  //   }>>('/login/info').then(res => {
  //     return res.data.data
  //   })

  return request<{
            logo_square: string
            logo_rectangle: string
            login_log:string
            slide:string[]
    }>({
      method: 'GET',
      url: '/login/info'
    })
}
