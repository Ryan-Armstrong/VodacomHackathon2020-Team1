import ext from '../../extensions.js';

const app = getApp();
let currentIndex = 0;

Page({
  data: {
    bannerAds: ['banner_1', 'banner_2', 'banner_3'],
    newReleases: app.newReleases,
    recommendedAlbums: app.recommendedAlbums,
    popularAlbums: app.popularAlbums
  },
  onLoad() {
    console.log("Music landing page loaded.")

  },

  bannerChanged(e) {
    currentIndex = e.detail.current;
  },

  onReady() {
    ext.setNav();
  },
  viewPlaylists() {
    console.log("View playlists");
    my.navigateTo({
      url: '../play-list-page/play-list-page'
    });
  },
  searchMusic() {
    my.navigateTo({
      url: '../search-page/search-page'
    });
  },

  selectedAlbum(e) {
    app.selectedItem = e.target.dataset.id;
    my.navigateTo({
      url: '../album-view/album-view'
    });

  },

  selectedSong(e) {
    app.selectedItem = e.target.dataset.id;
    my.navigateTo({
      url: '../song-view/song-view'
    });
  },

  bannerTapped() {

    if (currentIndex == 0) {
      app.globalData.source = "https://www.samsung.com/za/";
    } else if (currentIndex == 1) {
      app.globalData.source = "https://www.vodacom.co.za/";
    } else {
      app.globalData.source = "https://www.takealot.com/";
    }
    my.navigateTo({
      url: '../generic-web-view/generic-web-view'
    });
  }
});