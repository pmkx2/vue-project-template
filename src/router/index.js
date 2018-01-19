import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './modules/home'

Vue.use(VueRouter)

let routes = []
const router = new VueRouter({
    routes: routes
        .concat(home)
})

router.beforeEach((to, from, next) => {
    next()
})

export default router