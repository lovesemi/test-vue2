<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/style/global.less";
export default {
  components: {
    Menu,
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 400px;
  height: 400px;
  border: 1px solid black;
  background-color: #000;
  margin: 0 auto;
}
</style>
