Page({
  data: {
      categoriesArr: ['Clothing', 'Technology', 'Home', 'Accessories', 'Fitness', 'Pets', 'Travel', 'Kitchen', 'Gardening'],
      channelsArr: ['Juni', 'FTN', 'Vodacom', 'Blu Betty', 'Takealot', 'Frankees', 'The Shine', 'DealDay', 'HomeDepot'],
      videoForYouArr: ['Lola\'s new collection', 'Nike Pastel Dreams', 'GoGo Mini Bags', 'Blu Betty', 'Takealot', 'Frankees', 'The Shine', 'DealDay', 'HomeDepot'],
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
