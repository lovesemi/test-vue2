<template>
  <ul class="contact-container">
    <li>
      <a href="mailto:819782303@qq.com">
        <div class="icon"><Icon type="mail" /></div>
        <span>819782303@qq.com</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon"><Icon type="github" /></div>
        <span>JackMa</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon weixin"><Icon type="weixin" /></div>
        <span>dyrage</span>
      </a>
      <div class="modules">
        <img
          src="https://t7.baidu.com/it/u=657578767,2750473856&fm=193&f=GIF"
          alt=""
        />
      </div>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=819782303&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon"><Icon type="qq" /></div>
        <span>819782303</span>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: { Icon },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.contact-container {
  list-style: none;
  margin: 0;
  padding: 0;
  color: @gray;
  li {
    height: 30px;
    line-height: 30px;
    margin: 14px 30px;
    position: relative;
    &:hover {
      .modules {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .modules {
    padding: 5px;
    position: absolute;
    left: 0;
    bottom: 30px;
    border-radius: 5px;
    background-color: #fff;
    box-sizing: border-box;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      display: block;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
    &::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      left: 50%;
      bottom: -4px;
      background-color: #fff;
      transform: translateX(-50%) rotate(45deg);
    }
  }
}
</style>
