import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './form.vue'

@Component({
    name: 'element-form',
    mixins: [template],
    components: {
    }
})
export default class Form extends Vue {
    formName = 'form1'
    queryInfo = {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        area: 33
    }
    rules = {
        name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
            { required: true, message: '请选择日期', trigger: 'change', type: 'date' }
        ],
        date2: [
            { required: true, message: '请选择时间', trigger: 'change', type: 'date' }
        ],
        type: [
            { required: true, message: '请至少选择一个活动性质', trigger: 'change', type: 'array' }
        ],
        resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
    }
    areaOption = [{
        value: 11,
        label: '北京'
    }, {
        value: 22,
        label: '上海'
    }, {
        value: 33,
        label: '重庆'
    }]

    changeSelect(val) {
        console.log(val)
    }

    changeCheck(val) {
        console.log(val)
    }

    changeRadio(val) {
        console.log(val)
    }

    // 提交
    async submit() {
        if (!await this.validate(this.formName)) return

        console.log('提交数据')
    }
}
