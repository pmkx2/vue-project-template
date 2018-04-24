import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './layout.vue'
import { Store as ComStore } from 'store/modules/common'

import Sidebar from './unit/sidebar'
import NavBar from './unit/navBar'
import MainContent from './unit/mainContent'

@Component({
    name: 'layout',
    mixins: [template],
    components: {
        Sidebar,
        NavBar,
        MainContent
    }
})
export default class Layout extends Vue {
    @ComStore.getter('sidebar') sidebar
}
