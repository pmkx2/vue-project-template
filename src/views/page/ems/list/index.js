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
    tableData = [{
        date: '2016-05-02',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1516 弄'
    }]
}
