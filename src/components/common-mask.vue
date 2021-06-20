<template>
  <transition :name="mergeConfig.fade ? 'fade' : ''">
    <div class="common-mask" v-show="visible" :class="mergeConfig.theme">
      <div class="text-container" :style="{ marginTop: mergeConfig.top + 'px' }">
        <img alt="loading" class="loading" src="../assets/loading.svg" />
        <!-- <slot>数据正在加载中...</slot> -->
        <span>{{ content }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "common-mask",
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          top: 0,
          theme: "dark",
          fade: true
        };
      }
    }
  },
  data() {
    return {
      visible: false,
      content: "数据正在加载中..."
    };
  },
  computed: {
    mergeConfig() {
      const defaultConfig = {
        top: 0,
        theme: "dark",
        fade: true
      };
      return Object.assign({}, defaultConfig, this.config);
    }
  }
};
</script>
