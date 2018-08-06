import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './tables.vue'

import TabA from './unit/tabA'
import Normal from './unit/normal'

@Component({
    name: 'tables',
    mixins: [template],
    components: {
        TabA,
        Normal      // 一般常用表格
    }
})
export default class Tables extends Vue {
    currentTab = 'Normal'

    tabs = [
        { label: '常规表格', value: 'Normal' },
        { label: 'TabA', value: 'TabA' }
    ]

    setTab(name) {
        this.currentTab = name
    }

    isCurrent(name) {
        return this.currentTab === name ? 'primary' : ''
    }
}
