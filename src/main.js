import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'
import router from './router'
import store from 'store'
import meta from 'vue-meta'
import * as filters from 'common/filters'

// Vue.config.productionTip = false

import 'src/style/app.scss'
import App from 'src/views/app'

// ui
import 'common/ui'
// directives
import 'common/directives'
// responsive
// import 'common/responsive'

// import all icons
import * as svgicon from 'vue-svgicon'
import 'views/icons'
Vue.use(svgicon, {
    tagName: 'icon'
})

Vue.use(meta, {
    keyName: 'metaInfo'
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

const FastClick = require('fastclick')
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
