//状态管理
'use strict'

import Vue    from 'vue'
import Vuex   from 'vuex'
import { mutation } from './utils/vuexUtil'

// import modules
import demo from './modules/demo'

Vue.use(Vuex)

let state = {}
let mutations = mutation(state, {})
let store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: {},
    actions: {},
    modules: {
        demo
    }
})

export default store