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
    console.log("Search music");
    my.navigateTo({ url: '../search-page/search-page' });
  },

  selectedAlbum(e) {
    console.log("Selected album with event: ", e.target.dataset.id);
    app.selectedItem = e.target.dataset.id;
    my.navigateTo({
      url: '../album-view/album-view'
    });

  },

  selectedSong(e){
       console.log("Selected song with event: ", e);
  }
});
