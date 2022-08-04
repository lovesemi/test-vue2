<template>
  <div class="test-container">
    <Aside />
  </div>
</template>

<script>
import Aside from "./";
import "@/style/global.less";
export default {
  components: {
    Aside,
  },
};
</script>

<style>
.test-container {
  margin: 0 auto;
  width: 250px;
  height: 650px;
  border: 1px solid black;
}
</style>
