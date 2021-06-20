import template from './components/index.vue';
// 源文件
class CommonMask {
  constructor(options, Vue) {
    this.vm = Vue;
    this.instance = null
    this.mask = null
    this.defaultData = {
      top: 0,
      visible: false,
      content: '数据正在加载中...',
      theme: 'dark',
      fade: true
    }
    this.eventPool = {
      show: [],
      hide: []
    } // 事件池 
    this.init(options)
  }
  static getInstance(options, Vue) {
    if (!this.instance) this.instance = new CommonMask(options, Vue);
    return this.instance
  }
  show(option = {}) {
    if(this.mask.visible) return
    const { content, top, theme, fade } = option
    if (content) this.setAttribute(content)
    if (top) this.setAttribute(top)
    if (theme) this.setAttribute(theme)
    if (fade !== undefined) this.setAttribute(fade) 
    //  TODO 赋值逻辑待优化
    this.mask.visible = true
    this.trigger('show')
  }
  setAttribute(attr) {
    this.mask[attr] = attr
  }
  hide() {
    if(!this.mask.visible) return
    this.mask.visible = false
    this.trigger('hide')
  }
  init(option) {
    console.log('通用loading组件初始化成功')
    const Com = this.vm.extend(template)
    const data = Object.assign({}, this.defaultData, option) // merge属性
    this.mask = new Com({
      data() {
        return data
      }
    })
    let tpl = this.mask.$mount().$el;
    document.body.appendChild(tpl) // 创建元素并插入DOM
  }
  on(type, fn) {
    if (!this.eventPool[type]) { 
      this.eventPool[type] = [];
      console.warn('目前仅支持show/hide钩子')
    }
    (!this.eventPool[type].includes(fn)) && this.eventPool[type].push(fn)
  }
  off(type, fn) {
    this.eventPool[type].forEach((item, index) => {
      if (fn == item) {
        this.eventPool[type].splice(index, 1)
      }
    })
  }
  trigger(type) {
    this.eventPool[type].forEach(fn => {
      fn.apply(this)
    })
  }
}

export default CommonMask