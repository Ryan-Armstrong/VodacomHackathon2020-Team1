const app = getApp();

Page({
  data: {
      categoriesArr: ['Clothing', 'Electronics', 'Home', 'Accessories', 'Fitness', 'Pets', 'Travel'],
      channelsArr: ['Juni', 'FTN', 'Vodacom', 'Blu Betty', 'Takealot', 'Frankees', 'The Space'],
      videoForYouArr: ['Lola\'s new collection', 'Nike Pastel Dreams', 'Juni - Sustaibability', 'GoGo Mini Bags', 'Blu Betty', 'Takealot', 'Frankees', 'The Space'],
  },
  onLoad() {},
  selectCategory(ev) {
    console.log(ev)
    my.navigateTo({ url: '../category/category' });
  },
  selectChannel(ev) {
    console.log(ev)
    my.navigateTo({ url: '../channel/channel' });
  },
  selectVideo(ev) {
    console.log(ev)
    my.navigateTo({ url: '../index/index' });
  },
  openGithub()
  {
    app.globalData.source = 'https://github.com/Ryan-Armstrong/VodacomHackathon2020-Team1';
    my.navigateTo({ url: "../genericweb/genericweb"})
  },
  openLinkedin()
  {
    app.globalData.source = 'https://www.linkedin.com/company/fastcomm-com/';
     my.navigateTo({ url: "../genericweb/genericweb"})
  }
});
