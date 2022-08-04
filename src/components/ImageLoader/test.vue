<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      :duration="3000"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("图片加载完成了");
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 1px solid black;
  margin: 0 auto;
}
</style>
