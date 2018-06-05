import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './normal.vue'

@Component({
    name: 'normal',
    mixins: [template],
    components: {
    }
})
export default class Normal extends Vue {
    isLoading = false
    tableData = []
    state = {
        '1': { text: '审核成功', cls: 'success' },
        '2': { text: '已实效', cls: 'info' },
        '3': { text: '审核中', cls: 'warning' },
        '4': { text: '审核失败', cls: 'danger' },
        '5': { text: '未审核', cls: '' }
    }
    queryInfo = {
        search: ''
    }

    // 编辑信息
    editInfo(index, val) {
        console.log(val)
    }

    // 删除信息
    deleteInfo(index, val) {
        this.confirm('此操作将永久删除该数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            this.isLoading = true
            console.log(index, val)
            setTimeout(() => {
                this.$notify({
                    type: 'success',
                    message: '删除成功!'
                })
                this.isLoading = false
            }, 1000)
        }).catch(() => {
            this.$notify({
                type: 'info',
                message: '已取消删除'
            })
        })
    }

    created() {
        for (let i = 1; i < 8; i++) {
            this.tableData.push({
                date: `2016-05-0${i + 1}`,
                name: `王小虎${i}`,
                state: '' + Math.floor(Math.random() * 5 + 1),
                address: `上海市普陀区金沙江路 151${i}号`
            })
        }
    }
}
