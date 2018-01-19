/* 状态管理 */

export default {
    //状态参数
    state: {
        // 页面是否加载中
        isLoading: false
    },
    
    //动态变化参数
    mutations: {
        //转换加载中状态
        pageLoading( state, loading ) {
            state.isLoading = loading;
        }
    }
}