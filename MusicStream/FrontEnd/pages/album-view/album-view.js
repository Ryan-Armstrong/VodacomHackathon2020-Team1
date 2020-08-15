const app = getApp();

Page({
  data: {
    id: String
  },
  onLoad() {
    console.log("DATA", app.selectedItem);
    this.webViewContext = my.createWebViewContext('web-view-1');
    this.setData({id: app.selectedItem.id});
    
  },

  browserMessage(e){
    console.log(e);
  }

});
