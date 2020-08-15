const app = getApp();
Page({
  data: {
    inputValue: "",
    searchArr: [{ name: "Isn't It Romantic", info1: "89 minutes | 1 GB", id: "3", pic: "s1" },
    { name: "Bad Boys For Life", info1: "124 minutes | 1.8 GB", id: "3", pic: "s2" },
    { name: "1917", info1: "119 minutes | 1.7 GB", id: "3", pic: "s3" },
    { name: "Joker", info1: "122 minutes | 1.65 GB", id: "3", pic: "s4" },
    { name: "Little Women", info1: "135 minutes | 2.1 GB", id: "3", pic: "s5" },
    { name: "Onward", info1: "102 minutes | 1.2 GB", id: "3", pic: "s6" },
    { name: "Someone Great", info1: "92 minutes | 1 GB", id: "3", pic: "s7" },],
    displayArr: {}
  },
  onLoad() {
    this.data.displayArr = this.data.searchArr;
  },
  searchInput(e) {
    let result = this.data.searchArr.filter(
      info => info.name.toLowerCase().includes(e.detail.value.toLowerCase()));
    this.setData({
      inputValue: e.detail.value,
      displayArr: result
    });
  },
  loadVideo(e) {
    app.selectedItem = e.target.dataset.id;
    // my.navigateTo({
    //   url: '../album-view/album-view'
    // });
  }
});
