// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/cartoon/index",
    "pages/scenery/index",
    "pages/bing/index",
  ],
  window: {
    backgroundColor: "#f6f6f6",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "#f6f6f6",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: false,
    selectedColor: "#ff6c6d",
    list: [
      {
        pagePath: "pages/index/index",
        text: "妹子",
        iconPath: "images/1-modified.png",
        selectedIconPath: "images/1.png",
      },
      {
        pagePath: "pages/cartoon/index",
        text: "二次元",
        iconPath: "images/2-modified.png",
        selectedIconPath: "images/2.png",
      },
      {
        pagePath: "pages/scenery/index",
        text: "风景",
        iconPath: "images/3-modified.png",
        selectedIconPath: "images/3.png",
      },
      {
        pagePath: "pages/bing/index",
        text: "必应",
        iconPath: "images/4-modified.png",
        selectedIconPath: "images/4.png",
      },
    ],
  },
});
