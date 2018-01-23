import Vuex from 'vuex'
import { State, Getter, Mutation, Action, namespace } from 'vuex-class'
import keymirror from '../utils/keymirror'
import { getter, mutation, action, decorator } from '../utils/vuexUtil'
import api from 'api'

export const storeName = 'home'

/*** state ***/
let state = {
    list: [],
    isLoading: false
}

/*** getters ***/
let getters = getter(state, {

})

/*** mutations ***/
let mutations = mutation(state, {
    setList(state, data) {
        state.list = data
    }
})

/*** actions ***/
let actions = action(state, {
    async getList({ commit }) {
        let res = await api.home.getList()
        commit('setList', res)
    },

    pageLoading({ commit }, loading) {
        state.isLoading = loading
    }
})

/*** module store ***/
let store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

/*** exports ***/
export let types = {
    state: keymirror(state),
    getter: keymirror(getters),
    mutation: keymirror(mutations),
    action: keymirror(actions)
}

export let module = {
    State: namespace(storeName, State),
    Getter: namespace(storeName, Getter),
    Mutation: namespace(storeName, Mutation),
    Action: namespace(storeName, Action)
}

export let Store = {
    state: decorator(module.State, types.state),
    getter: decorator(module.Getter, types.getters),
    mutaion: decorator(module.Mutation, types.mutations),
    action: decorator(module.Action, types.actions)
}

export default store