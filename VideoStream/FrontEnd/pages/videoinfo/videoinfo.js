import ext from '../../extensions.js'
const app = getApp();

Page({
  data: {
    selectedItem: {},
    clickedInfo: "hiddenRow",
    watchHidden: true,
    romanticMovies: [
      {
        image: "preview_3.png",
        name: "Isn't it romantic"
      },
      {
        image: "preview_6.png",
        name: "Call me by your name"
      },
      {
        image: "preview_9.png",
        name: "The Lovebirds"
      },
      {
        image: "preview_3.png",
        name: "Isn't it romantic"
      },
      {
        image: "preview_6.png",
        name: "Call me by your name"
      },
      {
        image: "preview_9.png",
        name: "The Lovebirds"
      }],
    actionMovies: [
      {
        image: "preview_1.png",
        name: "Bloodshot"
      },
      {
        image: "preview_5.png",
        name: "The Old Guard"
      },
      {
        image: "preview_8.png",
        name: "Bad Boys For Life"
      },
      {
        image: "preview_1.png",
        name: "Bloodshot"
      },
      {
        image: "preview_5.png",
        name: "The Old Guard"
      },
      {
        image: "preview_8.png",
        name: "Bad Boys For Life"
      }],
    dramaMovies: [
      {
        image: "preview_7.png",
        name: "Gravity"
      },
      {
        image: "preview_2.png",
        name: "Troy"
      },
      {
        image: "preview_4.png",
        name: "Onward"
      },
      {
        image: "preview_7.png",
        name: "Gravity"
      },
      {
        image: "preview_2.png",
        name: "Troy"
      },
      {
        image: "preview_4.png",
        name: "Onward"
      }],
  },
  onLoad() { 
    this.setData({selectedItem: app.selectedItem.id});  
    if (app.selectedItem.id === '3') 
        this.showMovieDetail()
  },
  onUnload() {
    app.selectedItem ="-1";
  },
  rentMovie() {
    my.confirm({
      title: 'Confirm Rental',
      content: 'Are you sure you want to rent this video for R35',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      success: (result) => {
        if (result.confirm) {
        my.alert({
          title: 'Order complete',
        });
        this.setData({ watchHidden: false });
        }
      },

    });
  },
  onWatch(){
    console.log("WATCH MOVIE");
    app.globalData.source = 'https://www.youtube.com/embed/8ZwgoVmILQU?autoplay=1&controls=0';
    my.navigateTo({
      url: '../generic-web/generic-web'
    });
  },
  viewPlaylists()
  {

  },
  searchMovies()
  {
     my.navigateTo({
      url: '../search-page/search-page'
    });
  },
  goHome()
  {
    my.reLaunch({
      url: '../video-landing-page/video-landing-page'
    });
  },
  goToRentals()
  {
    my.reLaunch({
      url: '../videoinfo/videoinfo'
    });
  },
  showMovieDetail() 
  {
    this.setData({ clickedInfo: "row" });
  },
  onReady()
  {
    ext.setNav();
  }
});
