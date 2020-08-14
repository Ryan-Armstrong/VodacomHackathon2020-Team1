Page({
  data: {
    fluidityArr: ['It\'s A Wrap Dress', 'Shell Tops', 'Swing Tunic & Tie', 'Two Tone Tunic'],
    amandaArr: ['Amanda\'s Picks', '2020 Accessories', 'Autumn Collection', 'All About Shoes'],
    inkaturahArr: ['Best of 2020', 'Wild Collection', 'Cleo\'s Collection', 'New in Store'],
    amountLikes: 1265,
    isFavourited: "",
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
    }
    else {
      this.data.amountLikes = this.data.amountLikes - 1
      this.data.isFavourited = ""
    }
    
    this.setData({amountLikes: this.data.amountLikes, isFavourited: this.data.isFavourited})
  }
});
