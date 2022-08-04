<template>
  <div id="wrap">
    <div class="box">
      <div class="one">
        <span></span>
      </div>
      <div class="two">
        <span></span>
        <span></span>
      </div>
      <div class="three">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="four">
        <div>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="five">
        <div>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="six">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.start();
  },
  methods: {
    start() {
      var divs = document.querySelectorAll(".box > div");
      console.log(divs);
      var target = [
        {
          r: 0,
          t: 300,
        },
        {
          r: -90,
          t: -300,
        },
        {
          r: 0,
          t: -300,
        },
        {
          r: -90,
          t: 300,
        },
        {
          r: 270,
          t: -300,
        },
        {
          r: 270,
          t: 300,
        },
      ];
      var dir = "X";

      for (let i = 0; i < divs.length; i++) {
        //let是为了在循环里能找到真正i的值
        setTimeout(function () {
          motion(
            divs[i],
            0.3,
            function () {
              dir = i >= divs.length - 2 ? "X" : "Y";
              this.style.transform =
                "rotate" +
                dir +
                "(" +
                target[i].r +
                "deg) translateZ(" +
                target[i].t +
                "px)";
              this.style.opacity = 1;
            },
            function () {
              //所有面都已经运动完了
              if (i == divs.length - 1) {
                //这个条件成立说明最后一个面已经到达位置了，代表所有的面已经到达位置了

                for (let i = 0; i < divs.length; i++) {
                  motion(
                    divs[i],
                    0.3,
                    function () {
                      dir = i >= divs.length - 2 ? "X" : "Y";
                      this.style.transform =
                        "rotate" +
                        dir +
                        "(" +
                        target[i].r +
                        "deg) translateZ(" +
                        target[i].t / 3 +
                        "px)";
                      this.style.opacity = 1;
                    },
                    function () {
                      if (i == divs.length - 1) {
                        //这个条件成立说明6个面已经合上了
                        var box = document.querySelector(".box");
                        box.style.animation = "move 10s linear infinite";
                      }
                    }
                  );
                }
              }
            }
          );
        }, i * 270);
      }

      function motion(obj, time, doFn, cb) {
        obj.style.transition = time + "s";
        doFn.call(obj); //用call是为了把dofn里的this指向obj

        var called = false; //用来处理transitionend事件发生多次的问题

        obj.addEventListener("transitionend", moveFn);

        function moveFn() {
          if (called) {
            return;
          }

          cb();

          obj.style.transition = "";
          obj.removeEventListener("transitionend", moveFn);
          //...

          called = true;
        }
      }
    },
  },
};
</script>

<style>
#wrap {
  margin: 300px 500px;
  perspective: 1000px;
}

.box {
  width: 200px;
  height: 200px;

  position: relative;

  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(-20deg) rotateZ(0deg);
}

.box > div {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #bbb;
  border-radius: 5px;
  background: #e7e7e7;

  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  /* 让每一个面都是弹性盒模型 */

  opacity: 0;
}

.box div span {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: inset 0 5px #b60505, inset 0 -5px #fa5d5d;
  /* 内阴影，正值在上面（往下走），负值在下面（往上走）。没有第三个数值，就不模糊 */
  background: #d82828;
}

.one {
  justify-content: center;
  /* 主轴（横轴）（水平）对齐试 */
  align-items: center;
  /* 纵轴（垂直）对齐方式 */

  /* 初始位置-右面 */
  transform: rotateY(90deg) translateZ(300px);

  /* 目标位置 */
  /* transform: rotateY(0deg) translateZ(300px); */
}

.two {
  justify-content: space-between;
  /* 两端对齐 */
  transform: rotateY(0deg) translateZ(-300px);

  /* transform: rotateY(-90deg) translateZ(-300px); */
}

.two span:nth-child(2) {
  align-self: flex-end;
  /* 子元素在纵轴上的对齐方式，flex-end(纵轴的结束边界) */
}

.three {
  justify-content: space-between;
  transform: rotateY(90deg) translateZ(-300px);
  /* transform: rotateY(0deg) translateZ(-300px); */
}

.three span:nth-child(2) {
  align-self: center;
}

.three span:nth-child(3) {
  align-self: flex-end;
}

.four {
  justify-content: space-between;
  transform: rotateY(0deg) translateZ(300px);
  /* transform: rotateY(-90deg) translateZ(300px); */
}

.four div {
  display: flex;
  flex-direction: column;
  /* 子元素竖着排，其实是把轴放置了90度 */
  justify-content: space-between;
}

.five {
  justify-content: space-between;
  transform: rotateX(90deg) translateZ(-300px);
  /* transform: rotateX(270deg) translateZ(-300px); */
}

.five div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.five div:nth-child(2) {
  justify-content: center;
}

.six {
  justify-content: space-between;
  transform: rotateX(90deg) translateZ(300px);
  /* transform: rotateX(270deg) translateZ(300px); */
}

.six div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@keyframes move {
  100% {
    transform: rotateX(340deg) rotateY(340deg) rotateZ(360deg);
  }
}
</style>