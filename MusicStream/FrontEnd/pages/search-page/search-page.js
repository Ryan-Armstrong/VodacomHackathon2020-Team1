const app = getApp();
Page({
  data: {
    inputValue: '',
    searchArr: [{ type: "Album", name: "Chromatica", info1: "Lady Gaga", info2: "16 tracks", info3: "01:04:27", id:"3" },
    { type: "Track", name: "Eve", info1: "Mi Casa", info2: "We Made It", id:"8" },
    { type: "Artist", name: "The Weekend", info1: "52 Tracks", info2: "3 Albums", id:"4" },
    { type: "Artist", name: "Kelly Khumalo", info1: "24 Tracks", id:"7" },
    { type: "Track", name: "Truth Hurts", info1: "Lizzo", info2: "Truth Hurts", id:"7" },]
  },
  onLoad() { },
  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  loadSong(e) {
    app.selectedItem = e.target.dataset.id;
    my.navigateTo({
      url: '../album-view/album-view'
    });
  }
});
