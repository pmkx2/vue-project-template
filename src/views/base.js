import Vue from 'vue'
import api from 'api'
import config from 'common/config'

export default class Base extends Vue {
    api = api
    config = config

    // 页面跳转
    goTo (options) {
        this.$router.push(options)
    }
}
