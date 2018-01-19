import axios from 'axios'
import config from 'common/config'

// 处理错误
function handleError (err) {
    // 如果是手动取消的请求，不显示错误信息
    if (axios.isCancel(err)) {
        console.log(err)
    } else {
        // 错误处理：自行添加
        console.log('api接口报错，请检查地址是否正确')
    }
}

// http get method
export function get(url, data) {
    return axios.get(`${config.api.host}${url}`, {
        params: data
    }).then((res) => {
        return res
    }).catch((err) => {
        handleError(err)
        throw err
    })
}

// http post method
export function post(url, data) {
    return axios.get(`${config.api.host}${url}`, {
        params: data
    }).then((res) => {
        return res
    }).catch((err) => {
        handleError(err)
        throw err
    })
}