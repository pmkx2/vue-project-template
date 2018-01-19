import Vue from 'vue'
import api from 'api'

export default class Base extends Vue {
    api = api

    // 页面跳转
    goTo = (options) => {
        this.$router.push(options)
    }
}