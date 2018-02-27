/**
 * 全局自定义指令
 */
import Vue from 'vue'
import { TransferDomDirective as TransferDom } from 'vux'

// vux转换动画指令
Vue.directive('transfer-dom', TransferDom)
