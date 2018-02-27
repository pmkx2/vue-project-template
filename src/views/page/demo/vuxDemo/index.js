import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './vuxDemo.vue'

import {
    Badge,
    GroupTitle,
    Group,
    Cell,
    CheckIcon,
    Datetime,
    Picker,
    Divider,
    Qrcode
} from 'vux'

@Component({
    name: 'vuxDemo',
    mixins: [template],
    metaInfo: {
        title: 'vux demo'
    },
    components: {
        Badge,
        GroupTitle,
        Group,
        Cell,
        CheckIcon,
        Datetime,
        Picker,
        Divider,
        Qrcode
    }
})
export default class VuxDemo extends Vue {
    checkIcon1 = true
    checkIcon2 = false
    // 日期选择
    dateValue = '2017-10-11'
    // 日期分开选择
    years = [[], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]
    year = ['2014', '5']
    // popUp
    popUpLeft = false
    popUpRight = false
    popUpTop = false
    popUpBottom = false
    popUpFull = false

    // 显示Toast
    showToast() {
        this.toast('显示Toast')
    }

    // 显示加载中
    showLoading() {
        this.$vux.loading.show()
        setTimeout(() => this.$vux.loading.hide(), 3000)
    }

    // 提示框
    showAlert() {
        this.alert('提示内容', {
            onShow() {
                console.log('显示提示框')
            },
            onHide() {
                console.log('隐藏提示框')
            }
        })
    }

    // 确认框
    showComfirm() {
        this.comfirm('确认框内容', '提示', {
            onShow() {
                console.log('显示')
            },
            onHide() {
                console.log('隐藏')
            },
            onCancel() {
                console.log('取消')
            },
            onConfirm() {
                console.log('确认')
            }
        })
    }

    // 监听popUp
    @Watch('popUpTop')
    changePopUpTop(val) {
        val && setTimeout(() => this.popUpTop = false, 2000)
    }
    @Watch('popUpBottom')
    changePopUpBottom(val) {
        val && setTimeout(() => this.popUpBottom = false, 2000)
    }

    created() {
        // 年数限值
        for (let i = 2000; i <= 2030; i++) {
            this.years[0].push({
                name: i + '年',
                value: i + ''
            })
        }
        console.log(this.$route)
    }
}
