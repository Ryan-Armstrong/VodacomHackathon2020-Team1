Page({
  data: {
      fluidityArr: ['It\'s A Wrap Dress', 'Shell Tops', 'Swing Tunic & Tie', 'Two Tone Tunic'],
      amandaArr: ['Amanda\'s Picks', '2020 Accessories', 'Autumn Collection', 'All About Shoes'],
      inkaturahArr: ['Best of 2020', 'Wild Collection', 'Cleo\'s Collection' , 'New in Store'],
  },
  onLoad() {},
  selectVideo(ev) {
    console.log(ev)
    my.navigateTo({ url: '../index/index' });
  },
});
