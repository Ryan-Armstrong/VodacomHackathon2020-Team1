import ext from '../../extensions.js';

Page({
  data: {
        swipeIndex: null,
        list: [
          { right: [{ type: 'edit', text: ' Unfavorite ', bgColor: '#ccc', fColor: '#f00' }, { type: 'delete', text: ' Delete ', bgColor: '#0ff', fColor: '#333' }], content: ' Text & background color change at the same time Execute swipe deletion recovery ' },
          { right: [{ type: 'delete', text: ' Delete ' }], content: 'AAA' },
          { right: [{ type: 'edit', text: ' Unfavorite ' }, { type: 'delete', text: ' Delete ' }], content: 'BBB' },
          { right: [{ type: 'delete', text: ' Delete ' }], content: 'CCC' },
        ],
      },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
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
    console.log("Subscribe button tapped.");
    my.navigateTo({ url: '../music-landing-page/music-landing-page' });
  },
  getTicketButtonTapped() {
    console.log("Get ticket button tapped.");
    my.navigateTo({ url: '../get-ticket-page/get-ticket-page' });
  },
  skipButtonTapped() {
    console.log("Skip button tapped.");
    my.navigateTo({ url: '../music-landing-page/music-landing-page' });
  },
  onSwipeStart() {
    console.log("swiping")
  },
  onRightItemClick(e) {
        const { type } = e.detail;
        my.confirm({
          title: 'Tips',
          content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          success: (result) => {
            const { list } = this.data;
            if (result.confirm) {
              if (type === 'delete') {
                list.splice(this.data.swipeIndex, 1);
                this.setData({
                  list: [...list],
                });
              }
    
              my.showToast({
                content: 'Confirm => Execute swipe deletion recovery ',
              });
              e.done();
            } else {
              my.showToast({
                content: 'Cancel => Swipe deletion status remains unchanged ',
              });
            }
          },
        });
      },
      onItemClick(e) {
        my.alert({
          content: `dada${e.index}`,
        });
      },
});
