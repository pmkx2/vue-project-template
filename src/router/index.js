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

router.beforeEach((to, from, next) => {
    next()
})

export default router