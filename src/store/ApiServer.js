/* API数据获取 */
import api from '../api'      // API列表

export default {
    actions: {
        //获取数据列表
        getList(data){
            return api.base.getList(data)
        }
    }
}
