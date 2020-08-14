const app = getApp();

Page({
  data: {
    bannerAds: ['banner_1', 'banner_2', 'banner_3'],
    newReleases: app.newReleasesMovies,
    youMightLike: app.mightLikeMovies,
    movieCategories: [
      {
        name: "Comedy Classics",
        firstColour: "#f3765b",
        secondColour: "#e60302"
      }, 
      {
        name: "Best of SA",
        firstColour: "#f3e65b",
        secondColour: "#26a23d"
      }, 
      {
        name: "Head Over Heels",
        firstColour: "#f35be4",
        secondColour: "#e6026e"
      }
    ]
  },
  onLoad() {

  },
});
