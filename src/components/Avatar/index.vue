<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //url 必须是一个字符串
      required: true, //属性必传
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
</style>
