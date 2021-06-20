<template>
  <transition :name="fade ? 'fade' : ''">
    <div class="common-mask" v-show="visible" :class="theme">
      <div class="text-container" :style="{ marginTop: top + 'px' }">
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
  data() {
    return {
      top: 0,
      visible: false,
      content: "数据正在加载中...",
      theme: "dark",
      fade: true
    };
  }
};
</script>
