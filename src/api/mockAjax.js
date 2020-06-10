import axios from 'axios'
const instance = axios.create({
    baseURL :'/mock',
    timeout : 15000
})
//注册请求拦截
instance.interceptors.request.use(config =>{
    return config
})
//注册响应拦截
instance.interceptors.response.use(
    response =>{
        return response.data
    },
    error=> {     
        return  Promise.reject(error)
    }
    
)

export default instance

