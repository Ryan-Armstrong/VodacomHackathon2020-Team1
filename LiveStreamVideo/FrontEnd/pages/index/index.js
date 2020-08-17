import ext from '../../extensions.js'
const app = getApp();

Page({
 onLoad(query) {
    // Page loading
    this.webViewContext = my.createWebViewContext('web-view-1');
    my.showLoading({
      content: 'Loading Video Stream...'
    });
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
  onTitleClick() {
    // Title clicked
    my.postMessage();
  },
  browserMessage(e){
    console.log(e);
    if (e.detail.type == 'ConfirmCheckout')
    {
      var cost = e.detail.cost;
      console.log("Confirm received");
      my.confirm({
        title: 'Check Out',
        content: 'Are you sure you want to confirm this order: R' + cost,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        success: (result) => {
          my.alert({
            title: 'Order has been placed',
          });
        },
        
      });
    }
    else if(e.detail.type === 'StopLoading')
    {
      const that = this;
      my.hideLoading({
        page: that,  // Prevents switching to other pages when execution, page pointing is not accurate
      });
    }
  },
})