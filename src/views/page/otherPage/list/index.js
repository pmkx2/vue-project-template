import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './list.vue'

@Component({
    name: 'list',
    mixins: [template],
    components: {
    }
})
export default class List extends Vue {
    title = '其他列表页面'

    created() {
        console.log('刷新：其他页面')
        // console.log(this.title)
    }
}
