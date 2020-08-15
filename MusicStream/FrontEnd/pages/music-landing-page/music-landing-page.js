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

  viewPlaylists() {
    console.log("View playlists");
  },
  viewPurchasedMusic() {
    console.log("View purchased");
  },
  viewSubscriptions() {
    console.log("View subscriptions");
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
