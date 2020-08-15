Page({
  data: {
    inputValue: '',
    searchArr: [{ type: "Album", name: "Chromatica", info1: "Lady Gaga", info2: "16 tracks", info3: "01:04:27" }, 
    { type: "Track", name: "Eve", info1: "Mi Casa", info2: "We Made It"}, 
    { type: "Artist", name: "The Weekend", info1: "52 Tracks", info2: "3 Albums" }, 
    { type: "Track", name: "Truth Hurts", info1: "Lizzo", info2: "Truth Hurts"}, 
    { type: "Artist", name: "Kelly Khumalo", info1: "24 Tracks"},]
  },
  onLoad() { },
  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  loadSong() {
    my.navigateTo({ url: '../index/index' });
  }
});
