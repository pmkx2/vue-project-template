/* 全局过滤函数 */
import {
    dateFormat as dateFt,
    numberComma
} from 'vux'

/**
 * 按格式进行日期过滤
 *
 * @export
 * @param {any} date
 * @param {string} format   // 格式
 * @returns
 */
export function dateFormat(date, format = 'YYYY-MM-DD') {
    if (!date || !new Date(date)) return ''
    return dateFt(date, format)
}

/**
 * 金额过滤（逢3位加逗号）
 *
 * @export
 * @param {any} money   // 金额
 * @param {any} digits   // 间隔位数
 * @returns
 */
export function moneyFormat(money = '0.00', digits = 3) {
    return numberComma(money, digits)
}

/**
 * 保留小数, 默认 2 位
 * @param {any} num
 * @param {boolean} isMust  // 是否必须保留小数点
 * @param {number} fixed    // 小数点位数
 */
export function toFixed(num, isMust = false, fixed = 2) {
    let newNum = parseFloat(num)
    if (isNaN(newNum) || newNum === 0) return !isMust ? '0' : (0).toFixed(fixed)

    if (isMust) return newNum.toFixed(fixed)

    let newNumArry = ('' + newNum).split('.')
    if (newNumArry[1] === '00') return newNumArry[0]

    return newNumArry[1] && newNumArry[1].length > 2 ? newNum.toFixed(fixed) : newNum
}
