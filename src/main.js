import Vue from 'vue'
import router from './router'
import store from 'store'

import 'src/style/app.scss'
import App from 'src/views/app'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
