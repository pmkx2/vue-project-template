import axios from 'axios'
import * as md5 from 'md5'
import stringify from 'qs/lib/stringify'
import config from 'common/config'
import { Notification as $notify } from 'element-ui'

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

function handleError(err = {}) {
    let errorCode = err.errorCode
    // 如果是手动取消的请求，不显示错误信息
    if (axios.isCancel(errorCode)) {
        console.log(errorCode)
    } else {
        // 错误处理
        let msg = err.message || '发生未知错误，请重试'
        if (('' + errorCode).indexOf('timeout') > -1) {
            msg = '加载超时！请检查你的网络'
        }
        $notify.error({
            title: '',
            message: msg
        })
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

function transformResponse(data) {
    if (data) {
        if (data.success) {
            let res = data.data
            return res
        } else {
            handleError(data)
            let msg = data.message || '发生未知错误，请重试'
            throw new Error(msg)
        }
    } else {
        let msg = 'Unknow Error'
        throw new Error(msg)
    }
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
        return transformResponse(data)
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
        throw err
    })
}

// http post method
export function post(url, data) {
    return ax.post(`${host}${url}`, processData(data)).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}
