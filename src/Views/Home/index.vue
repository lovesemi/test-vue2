<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handlerwhell"
  >
    <ul
      class="fill"
      :style="{ marginTop }"
      @transitionend="handlerTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Homepage :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" class="icon iconUp" @click="switchbtn(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      class="icon iconDown"
      @click="switchbtn(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: index === i }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchbtn(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Homepage from "./homepage";
import Icon from "@/components/Icon";
import { mapState } from "vuex";

export default {
  components: {
    Homepage,
    Icon,
  },
  data() {
    return {
      index: 0, //当前第几张轮播图
      containerHeight: 0,
      switching: false,
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handlerResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handlerResize);
  },
  computed: {
    marginTop() {
      return -this.containerHeight * this.index + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    switchbtn(i) {
      this.index = i;
    },
    handlerwhell(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      }
    },
    handlerTransitionEnd() {
      this.switching = false;
    },
    handlerResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
@import "~@/style/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  background: @dark;
}
.fill {
  width: 100%;
  height: 100%;
  transition: 0.5s;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  font-size: 30px;
  @gap: 25px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.iconUp {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.iconDown {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>
