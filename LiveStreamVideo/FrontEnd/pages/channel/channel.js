import ext from '../../extensions.js';

Page({
  data: {
    fluidityArr: ['It\'s A Wrap Dress', 'Shell Tops', 'Swing Tunic & Tie', 'Two Tone Tunic'],
    amandaArr: ['Amanda\'s Picks', '2020 Accessories', 'Autumn Collection', 'All About Shoes'],
    inkaturahArr: ['Best of 2020', 'Wild Collection', 'Cleo\'s Collection', 'New in Store'],
    amountLikes: 1265,
    isFavourited: "",
    isFav : false
  },
  onLoad() { },
  selectVideo(ev) {
    console.log(ev)
    my.navigateTo({ url: '../index/index' });
  },
  toggleFavourite(ev) {
    if (this.data.isFavourited === "") {
      this.data.amountLikes = this.data.amountLikes + 1
      this.data.isFavourited = "_filled"
      this.data.isFav = true;
    }
    else {
      this.data.amountLikes = this.data.amountLikes - 1
      this.data.isFavourited = ""
      this.data.isFav = false;
    }
    
    this.setData({amountLikes: this.data.amountLikes, isFavourited: this.data.isFavourited, isFav : this.data.isFav})
  },
  onReady()
  {
    ext.setNav();
  }
});
