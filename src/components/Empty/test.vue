<template>
  <div class="test-empty">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style scoped>
.test-empty {
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border: 1px solid black;
  position: relative;
}
</style>
