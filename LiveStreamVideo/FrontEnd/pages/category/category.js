Page({
  data: {
      spaceArr: ['Summer 2020', 'It\'s A Wrap Dress', 'Autumn Collection', 'Shell Tops'],
      goodArr: ['Floral Flash Sale', 'New Jumpsuits', 'Animal Print', 'Winter Warmer'],
      blueArr: ['Introducing Amy', 'Best In Boots', 'August Pre-Sale' , 'The Classics'],
  },
  onLoad() {},
  selectVideo(ev) {
    console.log(ev)
    my.navigateTo({ url: '../index/index' });
  },
});
