window.onerror = function (msg, url, line, col, error) {
    // 没有URL不上报！上报也不知道错误
    if (msg !== 'Script error.' && !url) {
        return true
    }
    // 采用异步的方式
    // 我遇到过在window.onunload进行ajax的堵塞上报
    // 由于客户端强制关闭webview导致这次堵塞上报有Network Error
    // 我猜测这里window.onerror的执行流在关闭前是必然执行的
    // 而离开文章之后的上报对于业务来说是可丢失的
    // 所以我把这里的执行流放到异步事件去执行
    // 脚本的异常数降低了10倍
    setTimeout(function () {
        var data = {}
        // 不一定所有浏览器都支持col参数
        col = col || (window.event && window.event.errorCharacter) || 0

        data.url = url
        data.line = line
        data.col = col
        if (!!error && !!error.stack) {
            // 如果浏览器有堆栈信息
            // 直接使用
            data.msg = error.stack.toString()
        } else if (!!arguments.callee) {
            // 尝试通过callee拿堆栈信息
            var ext = []
            var f = arguments.callee.caller
            var c = 3
            // 这里只拿三层堆栈信息
            while (f && (--c > 0)) {
                ext.push(f.toString())
                if (f === f.caller) {
                    break // 如果有环
                }
                f = f.caller
            }
            ext = ext.join(',')
            data.msg = error.stack.toString()
        }
        // 把data上报到后台！
    }, 0)

    return true
}

// window.onerror = function(msg, url, line, col, error) {
//     console.log('错误信息：' + msg)
//     console.log('出错文件：' + url)
//     console.log('出错行号：' + line)
//     console.log('出错列号：' + col)
//     console.log('错误详情：' + error)
// }
// setTimeout(() => {
//     throw new Error('出错了！')
// }, 3000)
