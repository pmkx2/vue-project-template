import Vue from 'vue'
import VueRouter from 'vue-router'

// import modules
import error from './modules/error'
import demo from './modules/demo'
import otherPage from './modules/otherPage'

Vue.use(VueRouter)

let routes = [
    { path: '/', redirect: '/demo' },
    { path: '*', redirect: '/404', hidden: true }
]
const router = new VueRouter({
    routes: routes
        .concat(error)
        .concat(demo)
        .concat(otherPage)
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
