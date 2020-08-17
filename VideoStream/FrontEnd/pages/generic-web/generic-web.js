import ext from '../../extensions.js'
const app = getApp();

Page({
  data: {
    source : ''
  },
  onLoad() {
    this.data.source = app.globalData.source;
  },
  onReady() {
    // Page loading is complete
    ext.setNav();
  }
});
