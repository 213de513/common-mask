# 工具介绍

通用遮罩层用于过度异步请求过程的空白时间，无需引入组件，使用API进行调用，增加生命周期钩子。

## API方式-使用方法 
```javascript
// main.js 
import commonMask from '@qnpm/common-mask'
Vue.use(commonMask, {
  top:0, // 设置全局文字高度 可不设置
  content: '数据加载中' // 设置全局提示消息 可不设置
})

// xxx.vue

// 显示弹出
this.$Mask.show({
  top: 100,
  content: '测试test'  // 局部配置优先级高于全局
})

// 隐藏弹出
this.$Mask.hide()

// 设置监听回调,目前仅支持show/hide两个钩子
this.$Mask.on('show',() => {
  console.log(this) // 这里的this是当前Vue组件实例
})

this.$Mask.on('hide',() => {
  console.log(this) // 这里的this是当前Vue组件实例
})

```
## 组件-使用方式
```javascript

//vue  有v-show来控制变量是否隐藏与显示
<common-mask v-show= "showMask">正在加载数据...</common-mask> 

```


## 配置项

|  配置项   |  说明  |  默认值  |  接受类型  |
|  ----  | ----  |  ----  | ---- |
| top  | 距离默认位置高度 |  0  | String|Number  |
| visiable  | 模态框是否可见 |  false  |  Boolean  |
| content  | 提示消息 |  数据正在加载中...  |  Boolean  |
| theme  | 主题 |  dark  |  dark/light  |
| fade  | 消失动画 |  true  |  Boolean  |

## TODO

1. 更加灵活的icon配置
2. 优化显示效果
