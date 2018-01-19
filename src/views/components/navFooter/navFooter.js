/* 组件：底部 */
import Vue from 'src/views/base';
import Component from 'vue-class-component';

@Component({
    name: 'navFooter',
    props: {
        items: {
            default: [
                '选项1',
                '选项2',
                '选项3'
            ]
        }
    },
    components: {
    }
})
export default class NavFooter extends Vue {
    //点击选项
    clickItem(item) {
        this.$emit('clickItem', item)
    }

    created() {
    }
}