import ext from '../../extensions.js';

Page({
  data: {},
  onLoad() { },
  purchaseTicket(e) {
    my.confirm({
      title: 'Confirm Purchase',
      content: 'R15 will be added to your August statement for this purchase.',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      success: (result) => {
        if (result.confirm) {
          my.alert({
            title: 'Order complete',
            success: (result2) => {
              this.goToNextPage();
            }
          });
        } else {
          my.alert({
            title: 'Order canceled',
          });
        }
      },
    });
  },
  goToNextPage() {
    my.navigateTo({ url: '../music-landing-page/music-landing-page' });
  },
  onReady()
  {
    ext.setNav();
  }

});
