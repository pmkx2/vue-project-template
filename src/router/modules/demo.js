
function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`src/views/page/demo/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'demo')
    }
}

let routes = [
    {
        path: '',
        redirect: '/demo'
    }, {
        name: 'demo',
        path: '/demo',
        meta: {
            title: 'demo'
        }
    }, {
        name: 'list',
        path: '/list',
        meta: {
            title: 'demo-list'
        }
    }
]

routes.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name, v.meta.title)
    }
})

export default routes
