const app = getApp();

Page({
  data: {
    playlists: app.playlists
  },
  onLoad() {

  },

  viewHome() {
    my.navigateTo({ url: '../music-landing-page/music-landing-page' });
  },
  searchMusic() {
    my.navigateTo({ url: '../search-page/search-page' });
  },


});
