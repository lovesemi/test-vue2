<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
    <img
      class="yuantu"
      @load="handload"
      :src="src"
      :style="{ opacity: yuantuOpacity, transtion: `${duration}ms` }"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      yuantuloaded: false, //原图是否加载完成
      everythingDone: false, //一切是否OK
    };
  },
  computed: {
    yuantuOpacity() {
      return this.yuantuloaded ? 1 : 0;
    },
  },
  methods: {
    handload() {
      this.yuantuloaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
      // console.log("原图加载OK");
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/style/mixin.less";
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(1vw);
  }
}
</style>
