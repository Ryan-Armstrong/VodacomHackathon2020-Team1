Page({
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
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
    console.log("Subscribe button tapped.");
    my.navigateTo({ url: '../music-landing-page/music-landing-page' });
  },
  getTicketButtonTapped() {
    console.log("Get ticket button tapped.");
  },
  skipButtonTapped() {
    console.log("Skip button tapped.");
    my.navigateTo({ url: '../music-landing-page/music-landing-page' });
  }
});
