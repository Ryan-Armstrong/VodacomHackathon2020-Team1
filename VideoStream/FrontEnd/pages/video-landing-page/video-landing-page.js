const app = getApp();
let currentIndex = 0;

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
        name: "Best in South Africa",
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

  searchMovies() {
    my.navigateTo({
      url: '../seach-page/seach-page'
    });
  },
  bannerChanged(e)
  {    
    currentIndex = e.detail.current;
    console.log(currentIndex);
  }
});
