import Vue from 'vue'
import api from 'api'
import config from 'common/config'
import { MessageBox } from 'element-ui'

export default class Base extends Vue {
    api = api
    config = config

    // 页面跳转
    goTo (options) {
        this.$router.push(options)
    }

    /**
     * confirm
     * @param {string} message  确认内容
     * @param {string} title    标题
     * @param {object} options  confirm参数
     * @return {Promise}
     * @example
     *  this.confirm('确认').then(confirm => {
     *      if (confirm) {
     *          ...
     *      }
     *  })
     */
    confirm(message, title = '提示', options) {
        let defOpts = {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            confirmButtonClass: 'el-button--danger',
            customClass: 'message-box',
            type: 'warning'
        }
        defOpts = { ...defOpts, ...options }
        return new Promise(async (resolve) => {
            try {
                await MessageBox.confirm(message, title, defOpts)
            } catch (error) {
                resolve(false)
                return
            }
            resolve(true)
        })
    }

    /**
     * validate form
     * @param formName
     */
    validate(refName) {
        return new Promise((resolve) => {
            let ref = refName
            if (typeof refName === 'string') {
                ref = this.$refs[refName]
            }
            ref.validate((valid) => {
                resolve(valid)
            })
        })
    }
}
