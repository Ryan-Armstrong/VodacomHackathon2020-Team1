import ext from '../../extensions.js';

const app = getApp();

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
  onReady()
  {
    ext.setNav();
  },
  viewPlaylists() {
    console.log("View playlists");
    my.navigateTo({ url: '../play-list-page/play-list-page' });
  },
  searchMusic() {
    my.navigateTo({ url: '../search-page/search-page' });
  },

  selectedAlbum(e) {
    app.selectedItem = e.target.dataset.id;
    my.navigateTo({
      url: '../album-view/album-view'
    });

  },

  selectedSong(e){
    app.selectedItem = e.target.dataset.id;
    my.navigateTo({
      url: '../song-view/song-view'
    });
  }
});
