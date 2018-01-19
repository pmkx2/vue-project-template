//状态管理
'use strict'

import Vue    from 'vue'
import Vuex   from 'vuex'
import ApiServer from './ApiServer'
import StoreConfig from './StoreConfig'

Vue.use(Vuex)

let store = new Vuex.Store({
    modules: {
        ApiServer,
        StoreConfig
    }
})

export default store