import Vue from 'vue'
import VueRouter from 'vue-router'

// import modules
import demo from './modules/demo'

Vue.use(VueRouter)

let routes = []
const router = new VueRouter({
    routes: routes
        .concat(demo)
})

router.beforeEach((to, from, next) => {
    next()
})

export default router