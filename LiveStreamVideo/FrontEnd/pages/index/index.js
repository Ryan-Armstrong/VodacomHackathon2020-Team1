const app = getApp();

Page({

 onLoad(query) {
    // Page loading
    this.webViewContext = my.createWebViewContext('web-view-1');   
  },
  onShow() {
    // Page showing
    
  },
  onReady() {
    // Page loading complete
    my.createSelectorQuery()
     .selectViewport().boundingClientRect()
     .exec((ret) => { 
        console.log(JSON.stringify(ret[0]));       
        app.globalData.width = ret[0].width;
        app.globalData.height = ret[0].height;
        // This will send a message to the browser, which will center the video
        this.webViewContext.postMessage({
          'width': ret[0].width,
          'height' : ret[0].height
        });
     });
  },
  onHide() {
    // Page hiding
  },
  onUnload() {
    // Page closed
  },
  onTitleClick() {
    // Title clicked
    my.postMessage();

  },
  onPullDownRefresh() {
    // Page pulled down
  },
  onReachBottom() {
    // Page pulled down till bottom
  },
  onShareAppMessage() {
   // Return customized sharing information
  },
  browserMessage(e){
    console.log(e);
    // my.alert({
    //   content:JSON.stringify(e.detail),      
    // });
    //this.webViewContext.postMessage({'sendToWebView': '1'});
    //this.webViewContext.postMessage({'sendToWebView': '1'});
  },
})