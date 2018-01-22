import Vue from 'src/views/base'
import Component from 'vue-class-component'

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


    get isLoading() {
        return this.$store.state.StoreConfig.isLoading
    }


    changeTitle() {
        this.title = '标题已改变';
    }

    clickButtonItem(itemName) {
        console.log('点击选项：' + itemName)
    }

    changeLoading() {
        this.$store.commit('pageLoading', true)
        let self = this;
        setTimeout(function () {
            self.$store.commit('pageLoading', false)
        }, 2000)
    }

    async getList(data) {
        this.listLoading = true;
        try {
            this.list = await this.api.home.getList(data);
            console.log('列表加载成功!')
            this.listLoading = false
        } catch (err) {
            this.listLoading = false
        }
    }


    created() {
        console.log('页面加载完毕！')
        let a = ['d','d']
    }
}