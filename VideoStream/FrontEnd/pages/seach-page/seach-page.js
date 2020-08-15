Page({
  data: {
    inputValue: '',},
  onLoad() {},
  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
});
