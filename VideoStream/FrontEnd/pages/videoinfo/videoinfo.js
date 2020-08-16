const app = getApp();

Page({
  data: {
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
  onLoad() { },
  rentMovie() {
    my.confirm({
      title: 'Confirm Rental',
      content: 'Are you sure you want to rent this video for R35',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      success: (result) => {
        my.alert({
          title: 'Order complete',
        });
        this.setData({ watchHidden: false });
      },

    });
  },
  onWatch(){
    console.log("WATCH MOVIE");
    app.globalData.source = 'https://www.youtube.com/embed/8ZwgoVmILQU?autoplay=1&controls=0';
    my.navigateTo({
      url: '../generic-web/generic-web'
    });
  }
});
