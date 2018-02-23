import Vue from 'vue'
import VueRouter from 'vue-router'

// import modules
import demo from './modules/demo'
import otherPage from './modules/otherPage'

Vue.use(VueRouter)

let routes = []
const router = new VueRouter({
    routes: routes
        .concat(demo)
        .concat(otherPage)
})

// 全局路由历史
let cachePage = (to, from, next) => {
    if (!router.allHistory) {
        router.allHistory = []
    }

    // console.log(to)
    // console.log(from)

    // 获取前两级历史页面
    let idx = router.allHistory.length < 2 ? 1 : 2
    let last = router.allHistory[router.allHistory.length - idx]

    // 判断to的页面是否为历史页面
    if (last && to.fullPath === last.fullPath) {
        to.meta.keepAlive = true
        router.allHistory.pop()
    } else {
        // 写入全局路由历史
        router.allHistory.push({
            id: router.allHistory.length,
            fullPath: to.fullPath
        })
        to.meta.keepAlive = false
    }
    // console.log(router.allHistory)
    // console.log(window.history)
}

router.beforeEach((to, from, next) => {
    cachePage(to, from, next)
    next()
})

export default router
