<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
  props: {
    toc: {
      type: Array,
    },
  },
  components: {
    RightList,
  },
  data() {
    return {
      isLoading: true,
      activeAnchor: "",
    };
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor的值
    setSelect() {
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        //看一下当前这个dom元素是不是应该被选中
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          //在规定的范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          //在规定的下方
          return;
        } else {
          //在规定的上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  computed: {
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((item) => ({
          ...item,
          isSelected: item.anchor === this.activeAnchor,
          children: getTOC(item.children),
        }));
      };
      return getTOC(this.toc);
    },
    //根据toc得到其对应元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
