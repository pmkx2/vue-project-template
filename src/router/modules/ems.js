import Layout from 'src/views/components/layout'

function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`src/views/page/ems/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'ems')
    }
}

let routes = {
    name: 'ems',
    path: '/ems',
    redirect: '/ems/home',
    component: Layout,
    meta: {
        title: '首页',
        icon: 'vue'
    },
    children: [
        // 首页
        {
            name: 'home',
            path: 'home',
            meta: {
                title: '首页',
                icon: 'vue'
            }
        },
        // 列表
        {
            name: 'list',
            path: 'list',
            meta: {
                title: '列表',
                icon: 'vue'
            }
        }
    ]
}

routes.children.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name, v.meta.title)
    }
})

export default [routes]
