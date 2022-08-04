<template>
  <div>
    <h1>头像组件</h1>
    <Avatar
      url="https://img0.baidu.com/it/u=3075353967,2555058517&fm=26&fmt=auto&gp=0.jpg"
      :size="300"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  components: {
    Avatar,
  },
};
</script>

<style scoped></style>
