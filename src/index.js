import CommonMask from './main'
import MaskComponent from './components/common-mask.vue'
import './styles/style.less'
export default {
  install(Vue,options){
    if(Vue){
      const instance = CommonMask.getInstance(options, Vue)
      Vue.component('commonMask',MaskComponent)
      Vue.prototype.$Mask = instance
    } else {
      throw new Error('您使用的不是Vue项目，暂不支持使用该插件')
    }
  }
}