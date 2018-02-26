import Vue from 'vue'
import api from 'api'
import config from 'common/config'

function getWinOptions(arg = []) {
    let isOpt = typeof arg[0] === 'object'
    let options = isOpt ? arg[0] : typeof arg[1] === 'object' ? arg[1] : arg[2] || {}
    let defOpts = {
        title: typeof arg[1] === 'string' ? arg[1] : '',
        content: !isOpt ? arg[0] : ''
    }
    return { ...defOpts, ...options }
}

export default class Base extends Vue {
    api = api
    config = config

    // 页面跳转
    goTo(options) {
        this.$router.push(options)
    }

    /**
     * 全局toast
     * @param {string} text     文字内容
     * @param {object} options  选项（非必填）
     */
    toast(text = '', options) {
        let defOpts = {
            text: text,
            type: 'text',        // success | warn | cancel | text
            time: 2000,
            width: '7.6em',
            position: 'default', // default | top | middle | bottom
            isShowMask: false
        }
        this.$vux.toast.show({ ...defOpts, ...options })
    }

    /**
     * 封装 alert 方法
     * @param {string} content  文字内容
     * @param {string} title    标题（非必填）
     * @param {object} options  选项（非必填）
     * @example this.alert('内容')
     *          this.alert('内容', '标题')
     *          this.alert('内容', {
     *              onShow() {
     *                  ...
     *              }
     *          })
     */
    alert() {
        let opts = getWinOptions(arguments)
        this.$vux.alert.show(opts)
    }

    /**
     * 封装 comfirm 方法
     * @param {string} content  文字内容
     * @param {string} title    标题（非必填）
     * @param {object} options  选项（非必填）
     * @example this.comfirm('确认内容')
     */
    comfirm() {
        let opts = getWinOptions(arguments)
        this.$vux.confirm.show(opts)
    }

    /**
     * sleep 定时器
     * @param {number} time 毫秒
     * @returns {Promise}
     */
    sleep(time = 0) {
        return new Promise((resolve) => {
            let timeId = setTimeout(function () {
                resolve(timeId)
            }, time)
        })
    }
}
