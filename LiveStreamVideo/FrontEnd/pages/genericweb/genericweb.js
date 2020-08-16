const app = getApp();

Page({
  data: {
    source : ""
  },
  onLoad(query) {
    this.data.source = app.globalData.source;
    //this.setData({source  : query.source});
  },
  onReady() {
  }
});
