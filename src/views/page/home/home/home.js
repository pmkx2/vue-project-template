import Vue from 'src/views/base'
import Component from 'vue-class-component'
import { Store } from 'store/modules/home'

import NavHeader from 'components/navHeader'  // 引入头部组件
import NavFooter from 'components/navFooter'  // 引入底部组件

@Component({
    name: 'home',
    props: {},
    components: {
        NavHeader,
        NavFooter
    }
})
export default class Home extends Vue {
    listLoading = false
    title = '头部组件'
    msg = '项目页'
    list = []
    // 底部选项
    footerItem = [
        '底部选项1',
        '底部选项2',
        '底部选项3'
    ]


    // Store
    @Store.state('isLoading') isLoading
    @Store.action('getList') getList
    @Store.action('pageLoading') pageLoading


    // 改变标题
    changeTitle() {
        this.title = '标题已改变';
    }

    // 点击底部选项
    clickButtonItem(itemName) {
        console.log('点击选项：' + itemName)
    }

    // 改变加载中状态
    changeLoading() {
        this.pageLoading(true)
        let self = this;
        setTimeout(function () {
            self.pageLoading(false)
        }, 2000)
    }

    // 独立获取数据
    async getList22(data) {
        this.listLoading = true;
        try {
            this.list = await this.api.home.getList(data);
            console.log('列表加载成功!')
            this.listLoading = false
        } catch (err) {
            this.listLoading = false
        }
    }

    // 渲染完成后操作：约定放置于底部
    created() {
        console.log(this.isLoading)
        // this.getList()
    }
}