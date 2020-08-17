import ext from '../../extensions.js';

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

  selectedPlaylist(e){
    app.selectedItem = e.target.dataset.id;
    my.navigateTo({
      url: '../play-list-detail-view/play-list-detail-view'
    });
  },
  onReady()
  {
    ext.setNav();
  }


});
