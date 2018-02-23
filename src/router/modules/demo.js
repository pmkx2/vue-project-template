
function getView(viewName) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            resolve(require(`src/views/page/demo/${viewName}`))
        }, reject, 'demo')
    }
}

let routes = [
    {
        path: '',
        redirect: '/demo'
    }, {
        name: 'demo',
        path: '/demo'
    }, {
        name: 'list',
        path: '/list'
    }, {
        name: 'vuxDemo',
        path: '/vuxDemo'
    }
]

routes.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name)
    }
})

export default routes
