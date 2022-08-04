<template>
  <div class="to-top-container" v-show="show" @click="handleClick">
    Top
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handlerScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handlerScroll);
  },
  methods: {
    handlerScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.to-top-container {
  width: 66px;
  height: 66px;
  position: fixed;
  bottom: 25px;
  right: 60px;
  background: @primary;
  text-align: center;
  z-index: 99;
  border-radius: 50%;
  line-height: 66px;
  cursor: pointer;
  color: #fff;
}
</style>
