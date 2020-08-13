Page({
  data: {
      categoriesArr: ['Clothing', 'Electronics', 'Home', 'Accessories', 'Fitness', 'Pets', 'Travel'],
      channelsArr: ['Juni', 'FTN', 'Vodacom', 'Blu Betty', 'Takealot', 'Frankees', 'The Shine'],
      videoForYouArr: ['Lola\'s new collection', 'Nike Pastel Dreams', 'GoGo Mini Bags', 'Blu Betty', 'Takealot', 'Frankees', 'The Shine', 'DealDay'],
  },
  onLoad() {},
  selectCategory(ev) {
    console.log(ev)
  },
  selectChannel(ev) {
    console.log(ev)
  },
  selectVideo(ev) {
    console.log(ev)
  }
});
