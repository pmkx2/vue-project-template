import Vue from 'src/views/base'
import Component from 'vue-class-component'

import api from 'src/api'      // API列表
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
    title = '头部组件'
    msg = '项目页'
    // 底部选项
    footerItem = [
        '底部选项1',
        '底部选项2',
        '底部选项3'
    ]
    list = []
    listLoading = false

    get isLoading() {
        return this.$store.state.StoreConfig.isLoading
    }


    // -- 单向改变数据 ----------------------------------
    // 改变标题：单向改变数据
    changeTitle() {
        this.title = '标题已改变';
    }

    // 点击底部选项：从子组件获取参数
    clickButtonItem(itemName) {
        console.log('点击选项：' + itemName);
    }

    // -- 状态管理 ----------------------------------
    // 状态：改变页面状态
    changeLoading() {
        this.$store.commit('pageLoading', true);
        var self = this;
        setTimeout(function () {
            self.$store.commit('pageLoading', false);
        }, 2000)
    }

    // -- API数据获取 ----------------------------------
    // API：获取数据列表
    async getList(data) {
        this.listLoading = true;
        try {
            this.list = await api.base.getList(data);
            console.log('列表加载成功!')
            this.listLoading = false;
        } catch (err) {
            this.listLoading = false;
        }
    }


    created() {
        console.log('页面加载完毕！');
    }
}