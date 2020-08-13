Page({
  data: {
      fluidityArr: ['Clothing', 'Electronics', 'Home', 'Accessories', 'Fitness', 'Pets', 'Travel'],
      amandaArr: ['Juni', 'FTN', 'Vodacom', 'Blu Betty', 'Takealot', 'Frankees', 'The Shine'],
      inkaturahArr: ['Lola\'s new collection', 'Nike Pastel Dreams', 'Juni - Sustaibability', 'GoGo Mini Bags', 'Blu Betty', 'Takealot', 'Frankees', 'The Shine'],
  },
  onLoad() {},
  selectVideo(ev) {
    console.log(ev)
    my.navigateTo({ url: '../index/index' });
  },
});
