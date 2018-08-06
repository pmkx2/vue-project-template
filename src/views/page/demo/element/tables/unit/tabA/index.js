import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './tabA.vue'

@Component({
    name: 'tabA',
    mixins: [template],
    components: {
    }
})
export default class TabA extends Vue {
    list = [
        {
            title: 'Title1',
            text: 'doc1-doc1-doc1',
            cls: false
        },
        {
            title: 'Title2',
            text: 'doc2-doc2-doc2',
            cls: false
        },
        {
            title: 'Title3',
            text: 'doc3-doc3-doc3',
            cls: false
        }
    ]

    setAct(v) {
        v.cls = !v.cls
    }
}
