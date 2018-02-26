import Vue from 'vue'
import {
    ToastPlugin,
    LoadingPlugin,
    AlertPlugin,
    ConfirmPlugin,
    // component
    Flexbox,
    FlexboxItem,
    Popup,
    XButton,
    XSwitch
} from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
// component
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('popup', Popup)
Vue.component('x-button', XButton)
Vue.component('x-switch', XSwitch)
