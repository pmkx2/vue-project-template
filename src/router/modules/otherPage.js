
function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`src/views/page/otherPage/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'otherPage')
    }
}

let routes = [
    {
        name: 'list',
        path: '/otherPage/list',
        meta: {
            title: 'otherPageList'
        }
    }
]

routes.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name, v.meta.title)
    }
})

export default routes
