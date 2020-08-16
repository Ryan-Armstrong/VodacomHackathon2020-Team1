const app = getApp();

Page({
  data: {
    source : ''
  },
  onLoad() {
    this.data.source = app.globalData.source;
  },
});
