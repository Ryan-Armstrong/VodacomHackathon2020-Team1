const app = getApp();

Page({
  data: {
    id: String
  },
  onLoad() {
    console.log("ID", app.selectedItem.id);
    this.setData({id: app.selectedItem.id});   
  },

  browserMessage(e){
    console.log(e);
  }

});