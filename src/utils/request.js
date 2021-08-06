import axios from 'axios'
import BASE_URL from '@/api/config'

// ui 组件
import { Toast } from 'antd-mobile'

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    timeout: 3000
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 拦截器
instance.interceptors.request.use(config => {
    Toast.loading('加载中...')
	return config
}, error => {
  	return Promise.reject(error);
})

instance.interceptors.response.use(response => {
    Toast.hide()
	return response
}, error => {
  	return Promise.reject(error)
})

const request = (method = 'GET', url, data = {}, options) => {
    let result = new Promise((resolve, reject) => {
        if ( method === 'GET' ) {
            instance.get(url, {
                params: data
            }, options).then(res => resolve(res)).catch(err => reject(err))
        } else {
            instance.post(url, {
                data
            }, options).then(res => resolve(res)).catch(err => reject(err))
        }
    })

    result.then(res => {
        // 后期做处理
    }).catch(err => {
        console.log('网络错误')
    })

    return result
}

export default request