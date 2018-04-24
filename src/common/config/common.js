import Vuex from 'vuex'
import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
import api from 'api'

export const storeName = 'common'

/** state **/
let state = {
    deviceBran: null,      // 获取数据字典 ---设备品牌
    deviceType: null,      // 获取数据字典 ---设备分类
    fireSystemType: null,          // 专业系统类型
    initFireSystemType: false,
    detectionType: null,          // 维保类型
    initDetectionType: false,
    buildingType: null,          // 维保业态
    initAllDetectionType: false,
    allBuildingType: null,          // 建筑类型
    initBuildingType: false,
    projectType: null,          // 项目过程状态  done   not_begin progressing
    initProjectType: false,
    logActionType: null,           // 项目动态，操作流水动作类别
    initLogActionType: false,
    logType: null,           // 信息类型
    initLogType: false,
    verifyStateType: null, // 人员审核状态类型
    positionType: null // 人员岗位类型

}

/** getters **/
let getters = getter(state, {

})

/** mutations **/
let mutations = mutation(state, {
    setDeviceBran(state, data) {
        state.deviceBran = data
    },

    setDeviceType(state, data) {
        state.deviceType = data
    },

    // 专业系统类型
    setFireSystemType(state, fireSystemType) {
        state.initFireSystemType = true
        state.fireSystemType = fireSystemType
    },

    // 维保类型
    setDetectionType(state, detectionType) {
        state.initDetectionType = true
        state.detectionType = detectionType
    },

    // 维保业态
    setBuildingType(state, buildingType) {
        state.initBuildingType = true
        state.buildingType = buildingType
    },

    // 建筑类型
    setAllBuildingType(state, allBuildingType) {
        state.initAllBuildingType = true
        state.allBuildingType = allBuildingType
    },

    // 项目过程状态  done   not_begin progressing
    setProjectType(state, projectType) {
        state.initProjectType = true
        state.projectType = projectType
    },

    // 项目动态，操作流水动作类别
    setLogActionType(state, logActionType) {
        state.initLogActionType = true
        state.logActionType = logActionType
    },

    // 信息类型
    setLogType(state, logType) {
        state.initLogType = true
        state.logType = logType
    },
    // 人员审核类型
    setVerifyStateType(state, verifyStateType) {
        state.initVerifyStateType = true
        state.verifyStateType = verifyStateType
    },
    // 人员岗位类型
    setPositionType(state, positionType) {
        state.initPositionType = true
        state.positionType = positionType
    }
})

/** actions **/
let actions = action(state, {
    // 设备台账明细--设备品牌接口
    async getDeviceBran({ commit }, value) {
        try {
            let res = await api.common.getDataDict(value)
            commit('setDeviceBran', res)
        } catch (error) {
            this.toast(error)
        }
    },

    // 设备台账明细 -- 设备类型接口
    async getDeviceType({ commit }, value) {
        try {
            let res = await api.common.getDataDict(value)
            commit('setDeviceType', res)
        } catch (error) {
            this.toast(error)
        }
    },

    // 专业系统类型
    async getFireSystemType({ state, commit }, reload = false) {
        if (!reload && state.initFireSystemType) return state.fireSystemType

        let res = await api.common.getDataDict({
            type: 'fire_system_type'
        })
        commit('setFireSystemType', res)
        return res
    },

    // 维保类型
    async getDetectionType({ state, commit }, reload = false) {
        if (!reload && state.initDetectionType) return state.detectionType

        let res = await api.common.getDataDict({
            type: 'detection_type'
        })
        commit('setDetectionType', res)
        return res
    },

    // 维保业态  和 建筑类型
    async getBuildingType({ state, commit }, reload = false) {
        if (!reload && state.initAllBuildingType) return state.allBuildingType

        let data = {type: 'building_type'}
        if (reload) data.parent_value = reload  // 有reload说明是维保业态
        let res = await api.common.getDataDict(data)
        if (reload) {
            commit('setBuildingType', res)
        } else {
            commit('setAllBuildingType', res)
        }
        return res
    },

    // 项目过程状态  done   not_begin progressing
    async getProjectType({ state, commit }, reload = false) {
        if (!reload && state.initProjectType) return state.projectType

        let res = await api.common.getStateDict({
            type: 'project'
        })
        commit('setProjectType', res)
        return res
    },

    // 项目动态，操作流水动作类别
    async getLogActionType({ state, commit }, reload = false) {
        if (!reload && state.initLogActionType) return state.logActionType

        let res = await api.common.getDataDict({
            type: 'ems_log_action_type'
        })
        commit('setLogActionType', res)
        return res
    },

    // 信息类型
    async getLogType({ state, commit }, reload = false) {
        if (!reload && state.initLogType) return state.logType

        let res = await api.common.getDataDict({
            type: 'ems_log_type'
        })
        commit('setLogType', res)
        return res
    },

    // 人员审核状态类型
    async getVerifyStateType({ state, commit }, reload = false) {
        if (!reload && state.initVerifyStateType) return state.verifyStateType

        let res = await api.common.getStateDict({
            type: 'info'
        })
        commit('setVerifyStateType', res)
        return res
    },

    // 人员岗位类型
    async getPositionType({ state, commit }, reload = false) {
        if (!reload && state.initPositionType) return state.positionType

        let res = await api.common.getDataDict({
            type: 'staff_position'
        })
        commit('setPositionType', res)
        return res
    }
})

/** module store **/
let store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

/** exports **/
export let types = getTypes(store)
export let module = getModule(storeName)
export let Store = getStore(module, types)

export default store
