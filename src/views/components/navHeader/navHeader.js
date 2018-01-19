/* 组件：头部 */
import Vue from 'src/views/base';
import Component from 'vue-class-component';

@Component({
    name: 'navHeader',
    props: {
        title: {
            default: '标题'
        }
    },
    components: {
    }
})
export default class NavHeader extends Vue {
    created (){
        console.log('使用this获取属性：', this)
    }
}