import Vue from 'vue'
import api from 'api'
import config from 'common/config'

import {
    ToastPlugin,
    LoadingPlugin,
    AlertPlugin,
    ConfirmPlugin
} from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

export default class Base extends Vue {
    api = api
    config = config

    // 页面跳转
    goTo(options) {
        this.$router.push(options)
    }

    /**
     * 全局toast
     * @param {string} text
     * @param {object} options
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
}