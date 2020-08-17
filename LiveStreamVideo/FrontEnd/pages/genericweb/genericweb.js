import ext from '../../extensions.js';
const app = getApp();

Page({
  data: {
    source : ""
  },
  onLoad(query) {
    this.data.source = app.globalData.source;    
  },
  onReady()
  {
    ext.setNav();
  }
});
