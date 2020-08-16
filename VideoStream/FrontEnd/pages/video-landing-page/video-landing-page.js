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
        name: "Best in \n South Africa",
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
  },
  viewPlaylists()
  {

  },
  goHome()
  {
    my.reLaunch({
      url: '../video-landing-page/video-landing-page'
    });
  },
  goToRentals()
  {
    my.reLaunch({
      url: '../videoinfo/videoinfo'
    });
  },
  bannerTapped()
  {
    
    if (currentIndex == 0)
    {
      app.globalData.source = "https://www.samsung.com/za/";
    }
    else if (currentIndex == 1)
    {
      app.globalData.source = "https://www.vodacom.co.za/";
    }
    else{
      app.globalData.source = "https://www.takealot.com/";
    }
    my.navigateTo({
      url: '../generic-web/generic-web'
    });
  }
});
