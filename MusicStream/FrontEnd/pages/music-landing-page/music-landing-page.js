const app = getApp();

Page({
  data: {
    bannerAds: ['banner_1', 'banner_2', 'banner_3'],
    newReleases: app.newReleases
  },
  onLoad() {
    console.log("Music landing page loaded.")

  },
});
