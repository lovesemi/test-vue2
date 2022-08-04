import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "不知道是个啥",
  data: [
    {
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg:
        "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "星辰大海",
      description: "宇宙万物不知其无穷奥妙",
    },
    {
      id: "2",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg:
        "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "无穷无尽",
      description: "鹏之大不知其几千里也",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg:
        "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "蔚蓝可期",
      description: "洪波浩渺一望无垠",
    },
  ],
});
