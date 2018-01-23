//状态管理
'use strict'

// import Vue from 'vue'
// import Vuex from 'vuex'
// import ApiServer from './ApiServer'
// import StoreConfig from './StoreConfig'

// Vue.use(Vuex)

// let store = new Vuex.Store({
//     modules: {
//         ApiServer,
//         StoreConfig
//     }
// })
// export default store

import Vue    from 'vue'
import Vuex   from 'vuex'
import { mutation } from './utils/vuexUtil'

// import modules
import home from './modules/home'

Vue.use(Vuex)

let state = {}

let mutations = mutation(state, {})

let store = new Vuex.Store({
    state: state,

    mutations: mutations,

    getters: {},

    actions: {},

    modules: {
        home
    }
})

export default store