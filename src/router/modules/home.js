
function getView(viewName) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            resolve(require(`src/views/page/home/${viewName}`))
        }, reject, 'home')
    }
}

let routes = [
    {
        path: '',
        redirect: '/home'
    }, {
        name: 'home',
        path: '/home'
    }, {
        name: 'list',
        path: '/list'
    }
]

routes.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name)
    }
})

export default routes
