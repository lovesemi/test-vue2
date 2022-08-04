<template>
  <div class="aside-container">
    <div class="avatar" v-if="data">
      <Avatar :url="data.avatar" />
    </div>
    <h1 v-if="data">{{ data.siteTitle }}</h1>
    <Menu />
    <Contact />
    <footer v-if="data">{{ data.icp }}</footer>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.aside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px, 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    margin: 20px auto;
  }
  footer {
    text-align: center;
    font-size: 12px;
  }
  h1 {
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
}
</style>
