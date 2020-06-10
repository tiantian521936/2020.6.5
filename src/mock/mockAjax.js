import axios from "axios"

		const instance = axios.create({
		    	baseURL : '/',
		    	timeout : 15000
		})

		instance.interceptors.request.use(config => {
    			return config
		})

		instance.interceptors.response.use(
			response =>{
        				return response.data
    			},
    			error =>{
        				return  Promise.reject(error)
    			}
		)

		export default instance	
