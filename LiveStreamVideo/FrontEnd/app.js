App({
  globalData: {
    source : ''
  },
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
    my.setNavigationBar({
      borderBottomColor : '#E60202'
    });

  },
  onShow(options) {
    // Reopened by scheme from the background
  },
});
