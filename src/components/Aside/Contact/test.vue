<template>
  <div class="test-contact">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/style/global.less";
export default {
  components: {
    Contact,
  },
};
</script>

<style scoped lang="less">
.test-contact {
  position: absolute;
  top: 100px;
  left: 50%;
  width: 300px;
  height: 400px;
  margin: 0 auto;
  background-color: #000;
  border: 3px solid red;
}
</style>
