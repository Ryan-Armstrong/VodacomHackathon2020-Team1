const app = getApp();

Page({
  data: {
    playlists: app.playlists
  },
  onLoad() {

  },

  viewHome() {
    console.log("View home tapped");
  },
  searchMusic() {
    my.navigateTo({ url: '../search-page/search-page' });
  },


});
