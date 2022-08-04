<template>
  <div class="ech-container">
    <div ref="ech" class="ech-a"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getEcharts();
  },
  methods: {
    getEcharts() {
      let echDom = document.querySelector(".ech-a");
      const myChart = this.$echarts.init(echDom); // 初始化，获得echart实例
      // 给当前图表实例添加配置
      myChart.setOption({
        title: {
          text: "手机平板 1-12月销量对比", // 图表标题
        },
        tooltip: {}, // 配置了该项，则鼠标移动上去后会有提示
        legend: {
          // 配置图例
          data: ["手机销量", "平板销量"],
        },
        xAxis: {
          // 配置横坐标
          data: Array(12)
            .fill(0)
            .map((it, i) => `${i + 1}月`),
        },
        yAxis: {}, // 纵坐标让其自动生成
        series: [
          {
            name: "手机销量", // 对应到图例
            type: "line", // 类型：线图
            // 配置数据
            data: Array(12)
              .fill(0)
              .map(() => Math.floor(Math.random() * 1000 + 800)),
            // smooth: true, // 添加此项可以让曲线变得平滑
          },
          {
            name: "平板销量", // 对应到图例
            type: "line", // 类型：线图
            // 配置数据
            data: Array(12)
              .fill(0)
              .map(() => Math.floor(Math.random() * 1000 + 800)),
            smooth: true, // 添加此项可以让曲线变得平滑
          },
        ],
      });
    },
  },
};
</script>

<style scoped lang="less">
.ech-container {
  height: 100%;
  .ech-a {
    background: #eee;
    width: 1000px;
    height: 660px;
    margin: 50px auto;
  }
}
</style>
