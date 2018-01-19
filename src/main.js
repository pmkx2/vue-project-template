import Vue from 'vue'
import router from './router'
import store from 'store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    // //初始化设置
    // mounted() {
    //     router.afterEach((to) => {
    //         console.log(to.name)
    //     })
    // },
    // methods: {
    //     //跳转到对应页面
    //     goToPage(page) {
    //         router.push({ name: page })
    //     }
    // },
    created: () => { }
})
