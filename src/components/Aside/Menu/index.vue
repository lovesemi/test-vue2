<template>
  <div class="menu-container">
    <router-link
      v-for="item in items"
      :to="{ name: item.name }"
      :key="item.link"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon"><Icon :type="item.icon" /></div>
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: { Icon },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          name: "Aboutme",
          title: "Echart案例",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    &.selected {
      background: darken(@words, 3%);
    }
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
