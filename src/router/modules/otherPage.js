
function getView(viewName) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            resolve(require(`src/views/page/otherPage/${viewName}`))
        }, reject, 'otherPage')
    }
}

let routes = [
    {
        name: 'list',
        path: '/otherPage/list'
    },
    {
        name: 'projectDetail',
        path: '/otherPage/projectDetail'
    }
]

routes.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name)
    }
})

export default routes
