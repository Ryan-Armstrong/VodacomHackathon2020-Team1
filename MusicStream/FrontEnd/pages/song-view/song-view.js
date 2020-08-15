const app = getApp();

Page({
  data: {
    id: String
  },
  onLoad() {
    this.setData({id: app.selectedItem.id});   
  },

  browserMessage(e){
    console.log(e);
  }

});