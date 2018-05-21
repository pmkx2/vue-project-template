import axios from 'axios'
import * as md5 from 'md5'
import stringify from 'qs/lib/stringify'
import config from 'common/config'

const host = config.api.host

// build http header
function buildHeader(option) {
    let headers = {
        'X-Application-Key': config.api.key,
        'X-Request-Sign': ''
    }
    if (option) {
        headers = { ...headers, ...option }
    }
    return headers
}

function handleError (err) {
    // 如果是手动取消的请求，不显示错误信息
    if (axios.isCancel(err)) {
        console.log(err)
    } else {
        // 错误处理
        console.log('api接口报错，请检查地址是否正确')
    }
}

function processData(apiData = {}) {
    let data = { ...apiData }
    let token = config.token
    if (!token) {
        return data
    }
    if (data instanceof FormData) {
        data.append('token', token)
    } else {
        data.token = token
    }
    return data
}

export let ax = axios.create({
    baseURL: host,
    headers: buildHeader(),
    timeout: 10000,
    responseType: 'json',
    transformRequest: [function (data) {
        if (data instanceof FormData) return data
        return stringify(data)
    }],
    transformResponse: [function (data) {
        if (data) {

        } else {
            let msg = 'Unknow Error'
            throw new Error(msg)
        }
    }]
})

ax.interceptors.response.use(function (res) {
    // let headers = res.headers
    return res
})

// http get method
export function get(url, data) {
    return ax.get(`${host}${url}`, {
        params: processData(data)
    }).then((res) => {
        return res
    }).catch((err) => {
        handleError(err)
        throw err
    })
}

// http post method
export function post(url, data) {
    return ax.get(`${host}${url}`, {
        params: processData(data)
    }).then((res) => {
        return res
    }).catch((err) => {
        handleError(err)
        throw err
    })
}
