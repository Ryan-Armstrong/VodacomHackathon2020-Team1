Page({
  data: {
      categoriesArr: ['Clothing', 'Electronics', 'Home', 'Accessories', 'Fitness', 'Pets', 'Travel'],
      channelsArr: ['Juni', 'FTN', 'Vodacom', 'Blu Betty', 'Takealot', 'Frankees', 'The Space'],
      videoForYouArr: ['Lola\'s new collection', 'Nike Pastel Dreams', 'Juni - Sustaibability', 'GoGo Mini Bags', 'Blu Betty', 'Takealot', 'Frankees', 'The Space'],
  },
  onLoad() {},
  selectCategory(ev) {
    console.log(ev)
  },
  selectChannel(ev) {
    console.log(ev)
    my.navigateTo({ url: '../channel/channel' });
  },
  selectVideo(ev) {
    console.log(ev)
    my.navigateTo({ url: '../index/index' });
  }
});
