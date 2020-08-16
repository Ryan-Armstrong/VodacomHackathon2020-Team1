const app = getApp();
Page({
  data: {
    inputValue: "",
    searchArr: [{ type: "Album", name: "Chromatica", info1: "Lady Gaga", info2: "16 tracks", info3: "01:04:27", id: "3", pic: "s_1" },
    { type: "Track", name: "Eve", info1: "Mi Casa", info2: "We Made It", id: "8", pic: "s_2" },
    { type: "Artist", name: "The Weekend", info1: "52 Tracks", info2: "3 Albums", id: "4", pic: "s_3" },
    { type: "Artist", name: "Kelly Khumalo", info1: "24 Tracks", id: "7", pic: "s_4" },
    { type: "Track", name: "Truth Hurts", info1: "Lizzo", info2: "Truth Hurts", id: "7", pic: "s_5" },],
    displayArr: {}
  },
  onLoad() {
    this.data.displayArr = this.data.searchArr;
  },
  searchInput(e) {
    let result = this.data.searchArr.filter(
      info => info.name.toLowerCase().includes(e.detail.value.toLowerCase()) || info.info1.toLowerCase().includes(e.detail.value.toLowerCase()));
    this.setData({
      inputValue: e.detail.value,
      displayArr: result
    });
  },
  loadSong(e) {
    app.selectedItem = e.target.dataset.id;
    my.navigateTo({
      url: '../album-view/album-view'
    });
  }
});
