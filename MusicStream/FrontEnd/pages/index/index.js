import ext from '../../extensions.js';

Page({
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
    ext.setNav();
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },

  subscribeButtonTapped() {
    my.confirm({
      title: 'Subscribe',
      message: 'By tapping on "I Agree", you agree to EZ Music streaming terms and conditions. You will be invoiced R99,99 on the anniversary of your subscription',
      confirmButtonText: 'I Agree',
      cancelButtonText: 'Cancel',
      success: (result) => {
        if (result.confirm) {
          my.alert({
            title: "Subscription successful",
            success: (result) => {
              my.navigateTo({ url: '../music-landing-page/music-landing-page' });
            }
          });
        }
      },
    });
    console.log("Subscribe button tapped.");

  },
  getTicketButtonTapped() {
    console.log("Get ticket button tapped.");
    my.navigateTo({ url: '../get-ticket-page/get-ticket-page' });
  },
  skipButtonTapped() {
    console.log("Skip button tapped.");
    my.navigateTo({ url: '../music-landing-page/music-landing-page' });
  }
});
