import Layout from 'src/views/components/layout'

function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`src/views/page/demo/element/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'element')
    }
}

let routes = {
    name: 'element',
    path: '/element',
    redirect: '/element/form',
    component: Layout,
    meta: {
        title: 'element',
        icon: 'vue'
    },
    children: [
        // 常规表单
        {
            name: 'form',
            path: 'form',
            meta: {
                title: '常规表单',
                icon: 'vue'
            }
        },
        // 常规表格
        {
            name: 'tables',
            path: 'tables',
            meta: {
                title: '常规表格',
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
