import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'
import router from './router'
import store from 'store'
// import meta from 'vue-meta'

// Vue.config.productionTip = false

import 'src/style/app.scss'
import App from 'src/views/app'

// import all icons
import * as svgicon from 'vue-svgicon'
import './views/icons'
Vue.use(svgicon, {
    tagName: 'icon'
})

// Vue.use(meta, {
//     keyName: 'metaInfo'
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
