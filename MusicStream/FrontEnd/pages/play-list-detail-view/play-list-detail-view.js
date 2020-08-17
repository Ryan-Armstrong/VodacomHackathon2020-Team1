import ext from '../../extensions.js';

const app = getApp();

Page({
  data: {
    id: String
  },
  onLoad() {
    this.setData({id: app.selectedItem.id});   
  },

  browserMessage(e){
    if(e.detail.navigateToUrl){
      my.navigateTo({
        url: e.detail.navigateToUrl
      });
    }
  },
  onReady()
  {
    ext.setNav();
  }
  

});