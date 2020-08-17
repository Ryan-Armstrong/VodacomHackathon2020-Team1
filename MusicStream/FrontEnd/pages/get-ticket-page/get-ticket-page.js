import ext from '../../extensions.js';
 var selectedItem = {};

Page({
  data: {
     items: [
      {name: '250 MB (2hours) for R7', value: '250'},
      {name: '500 MB (4hours) for R15', value: '500', checked: true},
      {name: '1 GB (8hours) for R25', value: '1'},   
    ],
  },
  onLoad() {
    selectedItem = this.data.items[0].name;

   },

  purchaseTicket(e) {
    let confirmMessage = 'will be added to your August statement for this purchase.';

    switch (selectedItem) {
      case '250': confirmMessage = 'R7 ' + confirmMessage;
        
        break;

        case '500': confirmMessage = 'R15 ' + confirmMessage;
        
        break;

        case '1': confirmMessage = 'R25 ' + confirmMessage;
        
        break;
    
      default: confirmMessage = 'R15 ' + confirmMessage;
        break;
    }

    my.confirm({
      title: 'Confirm Purchase',
      content: confirmMessage,
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
  },

  radioChange(e) {
    selectedItem = e.detail.value
  },

});
